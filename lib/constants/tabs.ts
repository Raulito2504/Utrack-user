import {
  Bell,
  GraduationCap,
  House,
  MessageSquareText,
  Notebook,
} from "lucide-react-native";
import { Tabs } from "~/lib/types/tabs";

/** Datos de la TabBar en la pantalla del `user` */
export const UserTabs: Array<Tabs> = [
  {
    name: "Inicio",
    Icon: House,
    ref: "home",
  },
  {
    name: "Tareas",
    Icon: Notebook,
    ref: "assignments",
  },
  {
    name: "Clases",
    Icon: GraduationCap,
    ref: "classes",
  },
  {
    name: "Chats",
    Icon: MessageSquareText,
    ref: "chats",
  },
  {
    name: "Actividad",
    Icon: Bell,
    ref: "notifications",
  },
];

/** Datos de la TabBar en la pantalla del `teacher` */
export const TeacherTabs: Array<Tabs> = [
  {
    name: "Maestro",
    Icon: House,
    ref: "home",
  },
  {
    name: "Tareas",
    Icon: Notebook,
    ref: "assignments",
  },
  {
    name: "Clases",
    Icon: GraduationCap,
    ref: "classes",
  },
  {
    name: "Chats",
    Icon: MessageSquareText,
    ref: "chats",
  },
  {
    name: "Actividad",
    Icon: Bell,
    ref: "notifications",
  },
];

/** Datos de la TabBar en la pantalla del `teacher` */
export const AdminTabs: Array<Tabs> = [
  {
    name: "Admin",
    Icon: House,
    ref: "home",
  },
  {
    name: "Tareas",
    Icon: Notebook,
    ref: "assignments",
  },
  {
    name: "Clases",
    Icon: GraduationCap,
    ref: "classes",
  },
  {
    name: "Chats",
    Icon: MessageSquareText,
    ref: "chats",
  },
  {
    name: "Actividad",
    Icon: Bell,
    ref: "notifications",
  },
];
