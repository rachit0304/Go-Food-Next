import {
   IconCircleDot, IconHome,  IconPhoto,  IconStar, IconTable
} from "@tabler/icons-react";


const Menuitems = [
  {
    title: "Dashboard",
    icon: IconHome,
    href: '/admin',
  },
  {
    title: "Manage Restaurants",
    icon: IconCircleDot,
    href: "/Restaurants",
  },
  {
    title: "Add Restaurants",
    icon: IconTable,
    href: "/admin/addrestaurant",
  },

  {
    // id: uniqueId(),
    title: "Add users",
    icon: IconStar,
    href: "/signup",
  },
  {
    // id: uniqueId(),
    title: "Manage Users",
    icon: IconPhoto,
    href: "/users",
  },

];

export default Menuitems;
