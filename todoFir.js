var firebaseConfig = {
  apiKey: "AIzaSyCH5FLlaXJg0CKG3mmRHngXfE_ssC-yFE4",
  authDomain: "todo-list-55283.firebaseapp.com",
  databaseURL: "https://todo-list-55283.firebaseio.com",
  projectId: "todo-list-55283",
  storageBucket: "todo-list-55283.appspot.com",
  messagingSenderId: "271064292051",
  appId: "1:271064292051:web:d9429d26b8043ad7"
};

firebase.initializeApp(firebaseConfig);

const collection = "todo";

let db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

function addTask(task) {

  db.collection(collection)
              .add(task)
              .then(function(docRef){
                console.log("Success - Task Id", docRef.id);
              }).catch(function (error) {
                console.log("Error", error);
              })


}

function dataWasUpdated(callback) {
  db.collection(collection).onSnapshot(callback);
}