export type Movement = {
  date: Date
  entity: string
  expiryDate?: Date
  giftCode?: string
  id: number
  operation: 'earned' | 'used'
  points: number
  transactionNo: string
}
