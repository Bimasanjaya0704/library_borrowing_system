import { Book } from "./book";

export class Member {
  public borrowedBooks: Book[] = [];

  constructor(public id: string, public name: string) {}

  borrowBook(book: Book): void {
    this.borrowedBooks.push(book);
  }

  returnBook(bookId: string): void {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.id !== bookId
    );
  }

  listAllBorrowedBooks(): Book[] {
    return [...this.borrowedBooks];
  }
}
