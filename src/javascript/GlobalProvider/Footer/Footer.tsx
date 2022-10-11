// ---Dependencies
import { ReactElement } from 'react';
import { RedSocial } from './Components/RedSocial';

/**
 * Footer Component: Ejemplo de Footer para la aplicación
 * @returns {ReactElement} ReactElement
 */
export function Footer(): ReactElement {
  // -----------------------RENDER
  return (
    <footer className="Footer">
      <RedSocial />
      <a href="*">Revisa nuestro Aviso de Privacidad</a>
      <p>
        © 2021 ABOGADOS, Inc. Todos los derechos reservados. ¿Te gusta éste sitio? Revisa{' '}
        <a href="https://www.forgemytech.com/" target="blank">
          forgemytech.com
        </a>
      </p>
    </footer>
  );
}
