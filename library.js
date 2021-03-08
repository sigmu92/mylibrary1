let myLibrary = []
const btn = document.getElementById("add")
const container = document.getElementById('main-container')


function Book(title="",author="",pages=0,read="n") {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = `${myLibrary.length}`
}

function addBookToLibrary(){
  var title = window.prompt("Enter the title: ")
  var author = window.prompt("Enter the author: ")
  var pages = window.prompt("Enter the pages: ")
  var read = window.prompt("Read? (y/n): ")
  myLibrary.push(new Book(title,author,pages,read))
}

function removeBook() {
  let indexNum = -1;
  for (i = 0; i < myLibrary.length; i++){
    const item = myLibrary[i]
    if (item.id == this.id) {
      indexNum = i;
    }
  }
  myLibrary.splice(indexNum,1)  
  clearGrid(container)
  createGrid(myLibrary.length)
  myLibrary.forEach(book => createDivs(book))
}

function updateRead(){
  for (i = 0; i < myLibrary.length; i++){
    const item = myLibrary[i]
    if (item.id == this.id) {
      item.read = 'y'
    }
  }
  clearGrid(container)
  createGrid(myLibrary.length)
  myLibrary.forEach(book => createDivs(book))
}

function createDivs(book) {
  
  const box = document.createElement('div');
  box.style.gridColumn = '1, span 1'
  box.style.gridRow = `${myLibrary.length}, span 1`
  box.classList.add("card")
  box.setAttribute('id', `${book.id}`)
  const titleDiv = document.createElement("div")
  titleDiv.textContent = `${book.title}`
  const authorDiv = document.createElement("div")
  authorDiv.textContent = `${book.author}`
  const pagesDiv = document.createElement("div")
  pagesDiv.textContent =`${book.pages}`
  const readDiv = document.createElement("div")
  readDiv.textContent =`${book.read}`
  const del = document.createElement('button')
  del.textContent = "Remove Book"
  del.setAttribute('id', `${book.id}`)
  del.addEventListener('click', removeBook)

  const status = document.createElement('button')
  status.textContent = "Read?"
  status.setAttribute('id', `${book.id}`)
  status.addEventListener('click', updateRead)
  

  box.appendChild(titleDiv);
  box.appendChild(authorDiv);
  box.appendChild(pagesDiv);
  box.appendChild(readDiv);
  box.appendChild(del);
  box.appendChild(status);


  container.appendChild(box);
}


function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid(width) {

  let columnWidth = 720/4;
  let rowWidth = 720/width;
  container.style.gridTemplateColumns = `repeat(4, 1fr)`
  container.style.gridTemplateRows = `repeat(${width}, 1fr)`
  
}

function updateLibrary() {

  addBookToLibrary()
  clearGrid(container)
  createGrid(myLibrary.length)
  myLibrary.forEach(book => createDivs(book))
}

btn.addEventListener('click', updateLibrary)
