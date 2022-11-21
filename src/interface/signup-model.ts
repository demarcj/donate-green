export interface SignupModel{
  signup: (new_signup: any) => void;
  route_signup: (route: string) => void;
}

export interface SignupDataModel{
  name: string;
  email: string;
  password: string;
  country: string;
}