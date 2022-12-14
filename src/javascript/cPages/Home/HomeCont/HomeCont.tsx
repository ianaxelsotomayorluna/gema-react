// ---Dependencys
import { Row } from 'antd';
import { ReactElement } from 'react';
// ---Components
import { FotoLic } from './Components/FotoLic';
import { TextoInformativo } from './Components/TextoInformativo';

/**
 * HomeCont Component: Contenedor principal donde se construye todo el contenido de la pagina
 * @returns {ReactElement} ReactElement
 */
export function HomeCont(): ReactElement {
  // -----------------------RENDER
  return (
    <Row className="HomeCont">
      <FotoLic />
      <TextoInformativo />
    </Row>
  );
}
