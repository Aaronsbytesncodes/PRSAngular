export type RequestStatus = 'NEW' | 'REVIEW' | 'APPROVED' | 'REJECTED';

export class Request {
  constructor(
    public id: number = 0,
    public userID: number = 0,
    public description: string = '',
    public justification: string = '',
    public dateNeeded: string = '',
    public deliveryMode: string = '',
    public status: RequestStatus = 'NEW',
    public total: number = 0.0,
    public requestNumber: string = '',
    public submittedDate: string = '',
    public reasonForRejection: string = ''
  ) {}

  get isOverLimit(): boolean {
    return this.total > 50;
  }
}