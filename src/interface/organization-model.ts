export interface OrganizationModel {
  id: string;
  title: string;
  location: string;
  comments: string[];
  updates: string[];
  description: string;
  donation_goal: number;
  donation_amount: number;
  liked_organization: boolean;
}