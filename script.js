
const addbookBtn = document.getElementById('open-form-btn')
const table = document.getElementById('books-table')
const submitBtn = document.getElementById('submitBtn')
const form = document.getElementById('new_book_form')
const bookName = document.getElementById('new-book-name')
const bookAuthor = document.getElementById('new-book-author')
const bookYear = document.getElementById('new-book-year')
const bookPages = document.getElementById('new-book-pages')
const bookRead = document.getElementById('new-book-read')
// const bookDeleteBtn = document.getElementById('td_btn_delete')
// const bookReadToggleBtn = document.getElementById('td_btn_read_status_toggle')

const myLibrary = [
    // {
    //     title: 'harry potter',
    //     author: 'J.K.R',
    //     year: '2000',
    //     pages: '404',
    //     read: 'true'
    // }
];

function Book(title, author, year, pages, read = 'false') {
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
    this.read = read

    info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)

    }
}



function addBookToLibrary() {

    const isBookRead = bookRead.checked ? 'true' : 'false';

    const new_book = new Book(
        bookName.value,
        bookAuthor.value,
        bookYear.value,
        bookPages.value,
        isBookRead
    )
    myLibrary.push(new_book)

    clearForm()
    displayBooks()


}


function displayBooks() {
    clearTable()
    for (const book of myLibrary) {
        // const {title, author, year, pages, read } = book;

        const new_tr = document.createElement('tr')

        for (const col in book) {
            const new_td = document.createElement('td')
            new_td.textContent = book[col];
            new_tr.appendChild(new_td)
        }
        const td_btns = document.createElement('td')
        td_btns.setAttribute('id', 'id_btns')

        const td_btn_delete = document.createElement('button')
        const td_btn_read_status_toggle = document.createElement('button')

        td_btn_delete.textContent = 'delete'
        td_btn_read_status_toggle.textContent = 'read'
        td_btn_delete.setAttribute("id", 'td_btn_delete')
        td_btn_read_status_toggle.setAttribute("id", 'td_btn_read_status_toggle')

        td_btns.appendChild(td_btn_delete)
        td_btns.appendChild(td_btn_read_status_toggle)
        new_tr.appendChild(td_btns)
        table.appendChild(new_tr)

        // button action to delete row
        td_btn_delete.addEventListener('click', () => {
            new_tr.remove()
            myLibrary.splice(myLibrary.indexOf(book), 1)
        })
        // button action to update read status
        td_btn_read_status_toggle.addEventListener('click', () => {
            const upd_read = () => {
                let temp;
                if (bookRead.checked) {
                    temp = "false"
                    bookRead.checked = false;

                }
                else {
                    temp = "true"
                    bookRead.checked = true
                }
                book['read'] = temp;
                displayBooks()
            }
            upd_read();
            })

    }
}


// function returnMyBookd(book) {
//     return { title, author, year, pages, read } = book;
//  }
function clearForm() {
    bookName.value = null
    bookAuthor.value = null
    bookYear.value = null
    bookPages.value = null
    bookRead.value = null
}

function clearTable() {
    table.innerHTML = `
     <tr>
    <th>Title</th>
    <th>Author</th>
    <th>Year Published</th>
    <th>No.of Pages</th>
    <th>Read or Not</th>
    </tr>`
}
// submitBtn.addEventListener('click', (event)=>{
//     event.preventDefault()
//     addBookToLibrary()
// })

form.addEventListener('submit', (event) => {
    event.preventDefault()
    addBookToLibrary()
})

