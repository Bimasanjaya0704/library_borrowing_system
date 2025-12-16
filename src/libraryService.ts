import { Book } from "./book";
import { Member } from "./member";

export class LibrayService {
  public books: Book[] = [];
  public members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  registerMember(member: Member): void {
    const esixtMember = this.members.some((m) => m.id === member.id);
    if (esixtMember) {
      throw new Error(`Member with ID ${member.id} is already registered.`);
    }

    this.members.push(member);
  }

  private findBookById(bookId: string): Book {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      throw new Error(`Book with ID ${bookId} not found.`);
    }

    return book;
  }

  findMemberById(memberId: string): Member {
    const member = this.members.find((b) => b.id === memberId);
    if (!member) {
      throw new Error(`Member with ID ${memberId} not found.`);
    }

    return member;
  }

  borrowBook(memberId: string, bookId: string): void {
    const book = this.findBookById(bookId);
    const member = this.findMemberById(memberId);

    book.borrow();
    member.borrowBook(book);
  }

  returnBook(memberId: string, bookId: string): void {
    const book = this.findBookById(bookId);
    const member = this.findMemberById(memberId);

    const borrowedBooks = member.listAllBorrowedBooks();
    const isBookBorrowedByMember = borrowedBooks.some((b) => b.id === bookId);
    if (!isBookBorrowedByMember) {
      throw new Error(
        `Member with ID ${memberId} has not borrowed book with ID ${bookId}.`
      );
    }

    book.return();
    member.returnBook(bookId);
  }

  searchBooksByTitle(title: string): Book[] {
    const books = this.books.filter((b) =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
    if (books.length === 0) {
      throw new Error(`No books found with title containing "${title}".`);
    }

    return books;
  }

  searchBooksByAuthor(author: string): Book[] {
    const books = this.books.filter((b) =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
    if (books.length === 0) {
      throw new Error(`No books found by author "${author}".`);
    }

    return books;
  }
}
