import { getID } from "../utils";

export const SHOPPING_LIST = [
  {
    id: getID(),
    name: "Milk",
    inCart: false
  },
  {
    id: getID(),
    name: "Egg",
    inCart: false
  },
  {
    id: getID(),
    name: "Dog Food",
    inCart: true
  }
];
