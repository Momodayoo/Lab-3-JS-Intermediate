/* Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. 

a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date.*/

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
//a
    function getBookTitle (bookId){
        return bookId;
        let matchingBook = books.find (books => books.id = bookId)
        return matchingBook.title;
    }
    console.log(getBookTitle(3))

//b 
    function getOldBooks (){
        return books.filter (books => books.year < 1950);
    }
    console.log (getOldBooks(books))

//c 
    function addGenre (bookGenre){
        books.map ((book) => (book.genre = "Classis"))
        return bookGenre;    
    }
    addGenre()
    console.log (books);

//d 
    function getTitles (authorInitial) {
        return books
            .filter (books => 
            books.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
            .map(book => book.title);
        }
    
    console.log (getTitles('6'))

//e
    function latestBook (){
    let latestYear = 1998 
    books.forEach ((books) => {
        if (books.year > latestYear) {
            latestYear = books.year;
        }
    })
    return books.find ((books) => books.year == latestYear);
}
    console.log (latestBook());
    