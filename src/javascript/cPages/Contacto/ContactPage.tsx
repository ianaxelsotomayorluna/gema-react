// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { ContactCont } from './ContactCont/ContactCont';

/**
 * Componente HomePage: este componente es para dar datos al Helmet de
 * la página y concatenarla con el contenedor de la página componente
 * @returns { ReactElement } ReactElement
 */
export function ContactPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Contacto</title>
      </Helmet>
      <ContactCont />
    </>
  );
}
