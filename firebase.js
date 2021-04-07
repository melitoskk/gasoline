exports.run = async (client, message, args, grupo, nome, privacidade, linksave) => {
  
  var firebase = require("firebase/app");
  
  // Add the Firebase products that you want to use
  require("firebase/auth");
  require("firebase/firestore");
  require('firebase/database');
  
  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  
  var firebaseConfig = {
    apiKey: "AIzaSyBTcWTeOLYN4bpPtR2bOuj8wtw8DR7lRy0",
    authDomain: "nitro2-fdfc2.firebaseapp.com",
    databaseURL: "https://nitro2-fdfc2-default-rtdb.firebaseio.com",
    projectId: "nitro2-fdfc2",
    storageBucket: "nitro2-fdfc2.appspot.com",
    messagingSenderId: "1011978237559",
    appId: "1:1011978237559:web:ffc22e45a56ad094797872",
    measurementId: "G-63MXJZNLBV"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  //console.log(`firebase: ${firebase}`)
  var database = firebase.database();
  var users = database.ref("items");
  var query = users.orderByChild('fcmToken');
  //console.log(query)
  users.child("gamejaaj").get().then(function(snapshot) {
    if (snapshot.exists()) {
      //console.log(snapshot.val());
    }
    else {
      //console.log("No data available");
    }
  }).catch(function(error) {
    //console.error(error);
    });
    const email = 'discordnitro2links@gmail.com'
    const password = 'nitronitro22'
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      let userRef = database.ref('items/');
      let nomegrupo = nome + "_" + grupo
      let grupotodos = 'todososemotedogasolineestaoaquiokentendeu';
      if (privacidade === '') {
        userRef.child(grupo).update({ [nome]: linksave})
        userRef.child(grupotodos).update({ [nomegrupo]: linksave})
      }
      else if (privacidade === "public") {
        console.log("publico")
        userRef.child(grupo).update({ [nome]: linksave, 'gjefiowefiwefjwefioj' : true})
        userRef.child(grupotodos).update({ [nomegrupo]: linksave})
      }
      else if (privacidade === "private") {
        console.log("privado")
        userRef.child(grupo).update({ [nome]: linksave, 'gjefiowefiwefjwefioj' : null })
        userRef.child(grupotodos).update({ [nomegrupo]: linksave})
      }
      message.author.send("Emote: " + "`" + nome +"`" +  " salvo no banco! Link: https://douglasillusory.github.io/Gasoline/?group=" + grupo)
      //console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      message.channel.send(errorMessage)
  });


}
