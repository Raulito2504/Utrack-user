import { Href } from "expo-router";
import { LucideIcon } from "lucide-react-native";

/**
 * Contenido de una categoria en el Drawer.
 */
export interface DrawerObject {
  /**
   * Nombre mostrado en el botón
   */
  name: string;
  /**
   * Descripción opcional del boton.
   * Se muestra abajo del nombre.
   */
  description?: string;
  /**
   * Ícono de Lucide React que se muestra al lado izquierdo del botón.
   */
  Icon: LucideIcon;
  /**
   * Hacia donde redirige el botón.
   *
   * Se tiene que usar una URL entera, ej:
   *
   * url: "(user)/home/dummypage"
   */
  url: Href;
  /**
   * Opción para mostrar un ícono al lado derecho del botón.
   */
  showRedirectButton?: boolean;
}

/**
 * Categoría en el Drawer
 */
export interface Drawer {
  /**
   * Nombre de la categoría.
   */
  name: string;
  /**
   * Contenido de la categoría, sigue el formato de `DrawerTypes`
   */
  content: Array<DrawerObject>;
}
