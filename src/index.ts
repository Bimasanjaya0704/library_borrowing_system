import { Book } from "./book";
import { LibraryService } from "./libraryService";
import { Member } from "./member";

const libraryService = new LibraryService();

// add book
const book1 = new Book("b1", "The 1984", "George Orwell");
const book2 = new Book("b2", "To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("b3", "The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("b4", "Brave New World", "Aldous Huxley");

libraryService.addBook(book1);
libraryService.addBook(book2);
libraryService.addBook(book3);
libraryService.addBook(book4);

// add member
const member1 = new Member("1", "Alice");
const member2 = new Member("2", "Bob");

libraryService.registerMember(member1);
libraryService.registerMember(member2);

// borrow book
libraryService.borrowBook("1", "b1");
libraryService.borrowBook("2", "b2");
libraryService.borrowBook("2", "b3");

console.log("Alice's borrowed books:", member1.listAllBorrowedBooks());
console.log("Bob's borrowed books:", member2.listAllBorrowedBooks());

// return book
libraryService.returnBook("1", "b1");

// search books
const searchResultsTitle = libraryService.searchBooksByTitle("The");
console.log("Search results for title 'The':", searchResultsTitle);

const searchResultsAuthor = libraryService.searchBooksByAuthor("Harper");
console.log("Search results for author 'The':", searchResultsAuthor);
