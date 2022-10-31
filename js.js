import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js'


        // TODO: Replace the following with your app's Firebase project configuration
        // See: https://firebase.google.com/docs/web/learn-more#config-object
        const firebaseConfig = {
          apiKey: "AIzaSyDhGcmZTqboqHaksmcmiVr6Vz6iFfwX2sw",
          authDomain: "library-4b054.firebaseapp.com",
          databaseURL: "https://library-4b054-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "library-4b054",
          storageBucket: "library-4b054.appspot.com",
          messagingSenderId: "261590089995",
          appId: "1:261590089995:web:e34ddff3a12c349659a20e"
          // ...
        };

        let btn = document.getElementById("btn")

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


//adding data to firestore
let userID;

function addDta(){
//works below but need to see if other works

addDoc(collection(db, "users"), {
  title: titl.value,
  author: auth.value,
  pgnum: pgnu.value,
  r: r,
  user:userID
    });
  console.log("done")



}



let dtaBtn = document.getElementById("dta")
dtaBtn.onclick = addDta;


// Initialize Firebase Authentication and get a reference to the service
const autho = getAuth(app);

      autho.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var username = user.email;
          console.log(username+" has logged in")
          modbtn.textContent = username;
          userID = user.uid
          // ...
        } else {
          // User is signed out
          // ...
          console.log("No user detected")
          modbtn.textContent = "Sign-In";
          userID = "Anonymous"
        }
      });


      console.log("HI")

      function signUpWithEmailPassword() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("pass").value;
        // [START auth_signup_password]
        createUserWithEmailAndPassword(autho, email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            console.log("It worked")
            modal.style.display = "none";
            modbtn.textContent = user;
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            // ..
          });
        // [END auth_signup_password]
      }

function signIn(){
    var email = document.getElementById("email").value;
        var password = document.getElementById("pass").value;
    signInWithEmailAndPassword(autho, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const username = user.email;
    // ...
    console.log(user+" has signed in")
    modal.style.display = "none";
    modbtn.textContent = username;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}





function signOut(){
      autho.signOut().then(() => {
      // Sign-out successful.
      console.log("You have signed out")
      modal.style.display = "none";
    modbtn.textContent = "Sign-In";

    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  let lgoutBtn = document.getElementById("LO");
  let signInBtn = document.getElementById("signin");
  signInBtn.onclick = signIn;

      // for testing function GO(){console.log("HIHIHI")}

      btn.onclick = signUpWithEmailPassword;
      lgoutBtn.onclick = signOut;


      // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modbtn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




let myLibrary = [

  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pgnum: 694,
    r: "read"
  },


];

//retrieving data from firestore-IT WORKS but normal js is out only showing first one at first

const querySnapshot = await getDocs(collection(db, "users"));
var newArray = [];
querySnapshot.forEach((doc) => {
  newArray.push(doc.data())
console.log(newArray)
    console.log(`${doc.id} => ${doc.data().title}`);

});
myLibrary = newArray
console.log(myLibrary)



//variable to access different elements.//
let titl = document.getElementById("title");
let auth = document.getElementById("psw");
let pgnu = document.getElementById("pgnum");
let che = document.getElementById("check");
let r;
if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}
let maincontent = document.querySelector(".maincontent");

function Book(title,author,pgnum,r){
  this.title = title
  this.author = author
  this.pgnum = pgnum
  if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}
  this.r = r

}

const addBookToLibrary=()=> {
  let title = titl.value;
  let author = auth.value;
  let pgnum = pgnu.value;
  if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}
    let newbook = new Book(title,author,pgnum,r);
  myLibrary.push(newbook);


addcardarr();
 }
 let logbookbtn = document.getElementById("logbook");
 logbookbtn.onclick = addBookToLibrary;

 //toggle read or unread on book//
 const readedit = (num) => {
 if(myLibrary[num].r === "read"){myLibrary[num].r = "unread"}
else if(myLibrary[num].r === "unread"){myLibrary[num].r="read"}
addcardarr();
}
const addcardarr =()=>{
  maincontent.textContent ="";

  for(let i=0;i<myLibrary.length;i++){
  let bookNode = document.createElement("div");

 let titleNode = document.createElement("h2");
  titleNode.textContent =  myLibrary[i].title;

  let authorNode = document.createElement("h2");
  authorNode.textContent = myLibrary[i].author;

  let pgnumNode = document.createElement("h2");
  pgnumNode.textContent =  myLibrary[i].pgnum;

  let readNode = document.createElement("h2");
  readNode.textContent = myLibrary[i].r;

  let editbutton = document.createElement("div");
  editbutton.innerHTML = "<button>Edit Read Status</button>";
   editbutton.onclick = () => {readedit(i)};

  let binbutton = document.createElement("div");
  binbutton.innerHTML = "<img src='delete.png'>"
  binbutton.onclick = ()=>{del(i)};


  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pgnumNode);
  bookNode.appendChild(readNode);
  bookNode.appendChild(editbutton);
  bookNode.appendChild(binbutton);

  let maincontent = document.querySelector(".maincontent");
  maincontent.appendChild(bookNode);
  }
 }


 //delete functioin to remove book//

 function del(num){
   myLibrary.splice(num,1);
   addcardarr();
 }

 addcardarr();

    //default card at start//
    /*
    document.querySelector(".title").textContent = myLibrary[0].title;
    document.querySelector(".author").textContent = myLibrary[0].author;
    document.querySelector(".pages").textContent = myLibrary[0].pgnum;
    document.querySelector(".read").textContent = myLibrary[0].r;
    let editbutton = document.createElement("div");
    editbutton.innerHTML = "<button>Edit Read Status</button>";
    editbutton.onclick=()=>{readedit(0)}
document.querySelector(".maincontent div").appendChild(editbutton);
  let binbutton = document.createElement("div");
  binbutton.innerHTML = "<img src='delete.png'>"
  binbutton.onclick = ()=>{del(0)}
  document.querySelector(".maincontent div").appendChild(binbutton);
  */
