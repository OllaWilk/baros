import type { NavItem } from "../types/common-types";

export const NAV_ITEMS:NavItem[] = [
  { key: 'home', label: 'home', to: '/drinks', end: true },
  { key: 'favourites', label: 'favourite', to: '/drinks/favourites' },
];
