// ---Dependencies
import { ReactElement } from 'react';
import { NavbarNav } from './Components/NavbarNav';

/**
 * Navbar Component: Ejemplo de navbar para la aplicación
 * @returns {ReactElement} ReactElement
 */
export function Navbar(): ReactElement {
  // -----------------------RENDER
  return (
    <nav className="Navbar">
      <NavbarNav />
    </nav>
  );
}
