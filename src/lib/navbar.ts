export interface INavbar {
  title: string;
  data: string;
}

export const navbar: INavbar[] = [
  {
    title: "home",
    data: "/",
  },
  {
    title: "product",
    data: "/product",
  },
  {
    title: "about",
    data: "/about",
  },
  {
    title: "team",
    data: "/team",
  },
];
