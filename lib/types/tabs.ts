import { LucideIcon } from "lucide-react-native";
/**
 * Representa un tipo de pestaña.
 *
 * *Ej.* Si el componente dentro de la carpeta (tabs) tiene el nombre de home.tsx, el valor en ref deberá ser "home"
 */
export interface Tabs {
  /**
   * El nombre que será visible en la TabBar.
   */
  name: string;
  /**
   * Ícono de LucideReact que se mostrara en la TabBar.
   */
  Icon: LucideIcon;
  /**
   * El nombre de la pantalla dentro de `(tabs)` al que apunta la entrada de TabBar.
   */
  ref: string;
}
