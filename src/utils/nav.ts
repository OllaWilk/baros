import type { NavItem } from "../types/common-types";

export const NAV_ITEMS:NavItem[] = [
  { key: 'home', label: 'home', to: '/cocktails', end: true },
  { key: 'favourites', label: 'favourite', to: '/cocktails/favourites' },
];
