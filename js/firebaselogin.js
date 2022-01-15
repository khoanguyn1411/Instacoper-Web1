  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
    apiKey: "AIzaSyBrZQsPWWwPxy3BTuBmCb7Zi99lgIfh28A",
    authDomain: "instacoper-app.firebaseapp.com",
    databaseURL: "https://instacoper-app-default-rtdb.firebaseio.com",
    projectId: "instacoper-app",
    storageBucket: "instacoper-app.appspot.com",
    messagingSenderId: "251358459774",
    appId: "1:251358459774:web:a533a5bccfb8ae352ce52f",
    measurementId: "G-HW0GKH9YQL"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth();




document.getElementById('loginbtn').addEventListener("click" ,(e)=>{
    var email = document.getElementById('txtEmailL').value;
    var password = document.getElementById('txtPasswordL').value;
  
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
  
     const dt = new Date();
      update(ref(database, 'users/' + user.uid),{
       last_login: dt,
     })
     location.replace("index.html")
      alert('Đăng nhập thành công');
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
  
     alert(errorMessage);
  });
  
  });

//   const user = auth.currentUser;

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//         link
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//     //   const uid = user.uid;
//         location.replace("blog.html")
//       // ...
//     } else {
//       // User is signed out
//       // ...
//        return
//     }
//   });

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//     }
// })
