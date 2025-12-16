import { Book } from "../src/book";
import { Member } from "../src/member";

describe("Member", () => {
  it("borrow book", () => {
    const member = new Member("1", "John Doe");
    const book = new Book("1", "1984", "George Orwell");

    member.borrowBook(book);
    expect(member.borrowedBooks.length).toBe(1);
  });

  it("return book", () => {
    const member = new Member("1", "John Doe");
    const book = new Book("1", "1984", "George Orwell");
    member.borrowBook(book);

    member.returnBook("1");
    expect(member.borrowedBooks.length).toBe(0);
  });

  it("list all borrowed books", () => {
    const member = new Member("1", "John Doe");
    const book1 = new Book("1", "1984", "George Orwell");
    const book2 = new Book("2", "To Kill a Mockingbird", "Harper Lee");
    member.borrowBook(book1);

    expect(member.listAllBorrowedBooks().length).toBe(1);
  });
});
