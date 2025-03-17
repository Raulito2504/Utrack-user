import { User } from "lucide-react-native";
import { Drawer } from "~/lib/types/drawer";

/** Datos que se usan para mostrar botones y categorías en el Drawer del `user`. */
export const UserDrawer: Array<Drawer> = [
  {
    name: "Inicio",
    content: [
      {
        name: "Mi perfil",
        Icon: User,
        url: "/(user)/home/dummypage",
      },
    ],
  },
];

/** Datos que se usan para mostrar botones y categorías en el Drawer del `teacher`. */
export const TeacherDrawer: Array<Drawer> = [
  {
    name: "Inicio",
    content: [
      {
        name: "Mi perfil",
        Icon: User,
        url: "/(user)/home/dummypage",
      },
    ],
  },
];

/** Datos que se usan para mostrar botones y categorías en el Drawer del `admin`. */
export const AdminDrawer: Array<Drawer> = [
  {
    name: "Inicio",
    content: [
      {
        name: "Mi perfil",
        Icon: User,
        url: "/(user)/home/dummypage",
      },
    ],
  },
];
