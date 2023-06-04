export interface NavLink {
  name: string;
  path: string;
}

export const links: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Introduction", path: "/introduction" },
  { name: "Story", path: "/story" },
  { name: "Characters", path: "/characters" },
  { name: "Staff", path: "/staff" },
];
