export interface CredentialModel {
  id: string;
  name: string;
  email: string;
  password: string;
  country: string;
  img?: string;
  is_signin: boolean;
}