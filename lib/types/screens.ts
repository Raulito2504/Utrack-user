/**
 * Tipos para definir una pagina nueva y asignarle datos.
 */
export interface Screens {
  /**
   * El nombre que tendrá la página
   */
  title: string;
  /**
   * La ubicación de la pagina.
   *
   * En caso de no definir una página, en el título se mostrara una url basica, ej. `home/dummypage`.
   *
   * Deberás añadir esa url en este parámetro.
   */
  ref: string;
}
