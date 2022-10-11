// ---Dependencys
import { Row } from 'antd';
import { ReactElement } from 'react';
import { ContactLogo } from './Components/ContactLogo';
import { Contacts } from './Components/Contacts';
// ---Components

/**
 * HomeCont Component: Contenedor principal donde se construye todo el contenido de la pagina
 * @returns {ReactElement} ReactElement
 */
export function ContactCont(): ReactElement {
  // -----------------------RENDER
  return (
    <Row className="ContactCont">
      <ContactLogo />
      <Contacts />
    </Row>
  );
}
