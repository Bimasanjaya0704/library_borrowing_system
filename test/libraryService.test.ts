import { Book } from "../src/book";
import { LibrayService } from "../src/libraryService";
import { Member } from "../src/member";

// add Book
// add Member
// borrow Book
// return Book
// search Books by title
// search Books by author

describe("LibraryService", () => {
  it("should add a book", () => {
    const libraryService = new LibrayService();
    const book = new Book("b1", "The 1984", "George Orwell");
    const book2 = new Book("b2", "To Kill a Mockingbird", "Harper Lee");
    libraryService.addBook(book);
    libraryService.addBook(book2);

    expect(libraryService.books.length).toBe(2);
  });

  it("should add a member", () => {
    const libraryService = new LibrayService();
    const member = new Member("1", "Alice");
    libraryService.registerMember(member);

    expect(libraryService.members.length).toBe(1);
  });

  it("should borrow a book", () => {
    const libraryService = new LibrayService();
    const book = new Book("b1", "The 1984", "George Orwell");
    const member = new Member("1", "Alice");
    libraryService.addBook(book);
    libraryService.registerMember(member);
    libraryService.borrowBook("1", "b1");

    expect(member.listAllBorrowedBooks().length).toBe(1);
    expect(member.listAllBorrowedBooks()).toContain(book);
    expect(book.isBookAvailable()).toBe(false);
  });

  it("should return a book", () => {
    const libraryService = new LibrayService();
    const book = new Book("b1", "The 1984", "George Orwell");
    const member = new Member("1", "Alice");
    libraryService.addBook(book);
    libraryService.registerMember(member);
    libraryService.borrowBook("1", "b1");
    libraryService.returnBook("1", "b1");

    expect(member.listAllBorrowedBooks().length).toBe(0);
    expect(book.isBookAvailable()).toBe(true);
  });

  it("should search books by title", () => {
    const libraryService = new LibrayService();
    const book1 = new Book("b1", "The 1984", "George Orwell");
    const book2 = new Book("b2", "The Kill a Mockingbird", "Harper Lee");
    const book3 = new Book("b3", "Brave New World", "Aldous Huxley");
    libraryService.addBook(book1);
    libraryService.addBook(book2);
    const results = libraryService.searchBooksByTitle("the");

    expect(results.length).toBe(2);
    expect(results).toContain(book1);
    expect(results).toContain(book2);
  });

  it("should search books by author", () => {
    const libraryService = new LibrayService();
    const book1 = new Book("b1", "The 1984", "George Orwell");
    const book2 = new Book("b2", "The Kill a Mockingbird", "Harper Lee");
    const book3 = new Book("b3", "Brave New World", "Aldous Huxley");
    libraryService.addBook(book1);
    libraryService.addBook(book2);
    libraryService.addBook(book3);
    const results = libraryService.searchBooksByAuthor("Aldous");

    expect(results.length).toBe(1);
    expect(results).toContain(book3);
  });
});
