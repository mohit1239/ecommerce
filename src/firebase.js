// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" 
const firebaseConfig = {
    apiKey: "AIzaSyC95E8iCn6GPn59dQegW74bzhWPf6IKDhA",
    authDomain: "app-587c9.firebaseapp.com",
    databaseURL: "https://app-587c9.firebaseio.com",
    projectId: "app-587c9",
    storageBucket: "app-587c9.appspot.com",
    messagingSenderId: "175394237181",
    appId: "1:175394237181:web:435842a9bbe2094d816c94",
    measurementId: "G-57PLT2HE4J"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth};
