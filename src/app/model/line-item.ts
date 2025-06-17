export class LineItem {
  constructor(
    public id: number = 0,
    public requestID: number = 0,
    public productID: number = 0,
    public quantity: number = 1
  ) {}

  toString(): string {
    return `LineItem: Req#${this.requestID} → Product#${this.productID} x${this.quantity}`;
  }
}