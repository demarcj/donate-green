export interface ProfileOptionModel{
  img: "account" | "heart" | "message" | "profile" | "wrench";
  nav: string;
  page_type: string;
}

export interface ProfileImg {
  account: string;
  heart: string;
  message: string;
  profile: string;
  wrench: string;
}