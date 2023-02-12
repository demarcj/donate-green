import { social } from "global-constants"

export interface OptionModel{
  img: "account" | "heart" | "message" | "profile" | "wrench" | "facebook" | "instagram" | "email" | "link";
  nav?: string;
  text: string;
  social?: social;
}

export interface ProfileImg {
  account: string;
  heart: string;
  message: string;
  profile: string;
  wrench: string;
  facebook: string;
  instagram: string;
  email: string;
  link: string;
}