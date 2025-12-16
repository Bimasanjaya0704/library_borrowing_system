import { Book } from "../src/book";

describe("Book", () => {
  it("book borrowed", () => {
    const book = new Book("1", "The Great Gatsby", "F. Scott Fitzgerald");
    book.borrow();
    expect(book.isBookAvailable()).toBe(false);
  });

  it("book returned", () => {
    const book = new Book("1", "The Great Gatsby", "F. Scott Fitzgerald");
    book.return();
    expect(book.isBookAvailable()).toBe(true);
  });
});
