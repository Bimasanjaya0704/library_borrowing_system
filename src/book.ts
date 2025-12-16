export class Book {
  private isAvailable: boolean = true;

  constructor(public id: string, public title: string, public author: string) {}

  isBookAvailable(): boolean {
    return this.isAvailable;
  }

  borrow(): void {
    if (!this.isAvailable) {
      throw new Error(`The book "${this.title}" is currently not available.`);
    }

    this.isAvailable = false;
  }

  return(): void {
    this.isAvailable = true;
  }
}
