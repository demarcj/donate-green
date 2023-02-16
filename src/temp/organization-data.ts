import { OrganizationModel } from "interface";

export const OrganizationData: OrganizationModel[] = [
  {
    id: `ef2efd70-e865-498d-bc0f-2138377544c4`,
    title: `Save the Trees`,
    location: `USA`,
    comments: [`First comment`, `Second comment`],
    updates: [`First update`, `Second update`],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo numquam ipsum ad? Eum vitae rem, unde odit eveniet voluptates provident numquam? Officia, consectetur ipsum minima veritatis alias voluptates at.`,
    donation_goal: 100,
    donation_amount: 50,
    liked_organization: true,
    
  },
  {
    id: `349345a0-2955-4303-805a-65e6a588153c`,
    title: `Save the Ocean`,
    location: `Canada`,
    comments: [],
    updates: [],
    description: `This HTML file is a template. If you open it directly in the browser, you will see an empty page`,
    donation_goal: 200,
    donation_amount: 50,
    liked_organization: false
  }
];