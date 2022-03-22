let myLibrary = [

  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pgnum: 694,
    r: "read"
  }
];


let titl = document.getElementById("title");
let auth = document.getElementById("psw");
let pgnu = document.getElementById("pgnum");
let che = document.getElementById("check");
let r;
if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}

function Book(title,author,pgnum,r){
  this.title = title
  this.author = author
  this.pgnum = pgnum
  if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}
  this.r = r

}

function addBookToLibrary() {
  let title = titl.value;
  let author = auth.value;
  let pgnum = pgnu.value;
  if(che.checked === true){r = "read"}
else if(che.checked === false){r = "unread"}
    let newbook = new Book(title,author,pgnum,r);
  myLibrary.push(newbook);

//addcard(title,author,pgnum,r);
addcardarr();
 }

 function addcard(title,author,pgnum,r){
 let bookNode = document.createElement("div");

let titleNode = document.createElement("h2");
 titleNode.textContent =  title;

 let authorNode = document.createElement("h2");
 authorNode.textContent = author;

 let pgnumNode = document.createElement("h2");
 pgnumNode.textContent =  pgnum;

 let readNode = document.createElement("h2");
 readNode.textContent = r;

 let editbutton = document.createElement("button");
 editbutton.textContent = "edit";
bookNode.appendChild(editbutton);
 bookNode.appendChild(titleNode);
 bookNode.appendChild(authorNode);
 bookNode.appendChild(pgnumNode);
 bookNode.appendChild(readNode);
 

 let maincontent = document.querySelector(".maincontent");
 maincontent.appendChild(bookNode);
}

let maincontent = document.querySelector(".maincontent");
 /*let authorNode = document.createElement("h3");
 let pageNode = document.createElement("h3");
 let readNode = document.createElement("h3");

 
  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pageNode);
  bookNode.appendChild(readNode);
*/
  

function addcardarr(){
  maincontent.textContent ="";
  
  for(i=0;i<myLibrary.length;i++){
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
  editbutton.innerHTML = "<button onclick='readedit("+ i +")'>Edit</button>";

  let binbutton = document.createElement("div");
  binbutton.innerHTML = "<img onclick='del(" + i + ")'src='delete.png'>"

  
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

 function readedit(num){
 if(myLibrary[num].r === "read"){myLibrary[num].r = "unread"}
else if(myLibrary[num].r === "unread"){myLibrary[num].r="read"}
addcardarr();
}




    
    //default card at start//
    document.querySelector(".title").textContent = myLibrary[0].title;
    document.querySelector(".author").textContent = myLibrary[0].author;
    document.querySelector(".pages").textContent = myLibrary[0].pgnum;
    document.querySelector(".read").textContent = myLibrary[0].r;
    let editbutton = document.createElement("div");
    editbutton.innerHTML = "<button onclick='readedit(0)'>Edit</button>";
document.querySelector(".maincontent div").appendChild(editbutton);
  let binbutton = document.createElement("div");
  binbutton.innerHTML = "<img onclick='del(0)' src='delete.png'>"
  document.querySelector(".maincontent div").appendChild(binbutton);