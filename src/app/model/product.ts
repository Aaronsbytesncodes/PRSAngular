export class Product {
  constructor(
    public id: number = 0,
    public vendorID: number = 0,
    public partNumber: string = '',
    public name: string = '',
    public price: number = 0.0,
    public unit: string = '',
    public photoPath: string = ''
  ) {}

  get displayName(): string {
    return `${this.name} (${this.partNumber})`;
  }
}