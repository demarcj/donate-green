import { social, share_img } from "global-constants";
import { OrganizationModel } from "."

export interface OptionModel{
  img: share_img;
  nav?: string;
  text: string;
  social?: social;
  org?: OrganizationModel;
}

export interface ProfileImg {
  account: string;
  heart: string;
  whatsapp: string;
  profile: string;
  wrench: string;
  facebook: string;
  instagram: string;
  email: string;
  link: string;
}