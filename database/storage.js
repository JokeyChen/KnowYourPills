(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUjoyrSiM2dWgqj5rcMYARG3PC46v3Gwk",
    authDomain: "knowyourpills.firebaseapp.com",
    databaseURL: "https://knowyourpills.firebaseio.com",
    projectId: "knowyourpills",
    storageBucket: "knowyourpills.appspot.com",
    messagingSenderId: "562459622714"
  };
  firebase.initializeApp(config);

  /**
   * Example code on getting the image of the product matched by given barcode
   * Inspired by: https://firebase.google.com/docs/storage/web/download-files
   * @param barcode the numeric barcode in String format
   */
  function getProductImg(barcode) {
    // Create the path
    path = 'products/' + 'barcode' + '.png';
    // Create a reference to the file we want to download
    var storageRef = firebase.storage().ref();
    var productImgRef = storageRef.child(path);
    // Get the download URL
    productImgRef.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "product_img"
      var img = document.getElementById('product_img');
      img.src = url;
    }).catch(function(error) {
      // Error handling
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          console.log('Image not found for product: ' + barcode);
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.log('User does not have permission to access ' + path);
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          console.log('An unknown error occurred');
          break;
      }
    });
  }

}());
