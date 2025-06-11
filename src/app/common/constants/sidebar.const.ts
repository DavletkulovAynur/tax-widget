import { Home } from "lucide-react";

const MENU_ITEMS = [
  {
    to: "/dashboard",
    icon: Home,
    label: "Главная",
  },
  {
    to: "/dashboard/taxes",
    icon: Home,
    label: "Налоги и отчётность",
  },
] as const;

export { MENU_ITEMS };
