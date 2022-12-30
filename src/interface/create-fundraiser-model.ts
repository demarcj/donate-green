export interface CreateFundraiserModel {
  children: JSX.Element;
  page_number: number;
  previous_page: string;
  emit: () => void;
}