export interface MenuItems {
  id: number;
  menuName: string;
  icon: string;
  route?: string;
  submenu?: MenuItems[]
};