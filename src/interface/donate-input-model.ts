export interface DonateInputModel {
  text: string;
  get_donate_amount: (num: string) => void;
}