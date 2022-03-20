let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

/*User interface*/



function cons(){
    let title = document.getElementById("title").value;
let auth = document.getElementById("psw").value;
let pgnum = document.getElementById("pgnum").value;
let chec = document.getElementById("check");
let r;
if(chec.checked === true){r = "read"}
else if(chec.checked === false){r = "unread"}
    console.log(title,auth,pgnum,r);
}