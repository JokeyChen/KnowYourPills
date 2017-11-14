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
  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  // Add login event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });
  // Add signup event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    // Sign In
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser)
    } else {
      console.log('Not logged in');
    }
  });
}());
