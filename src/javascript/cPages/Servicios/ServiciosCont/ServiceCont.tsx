// ---Dependencys
import { Row } from 'antd';
import { ReactElement } from 'react';
// ---Components
import { Prevencion } from './Components/Prevencion';
import { Mediacion } from './Components/Mediacion';
import { Defensa } from './Components/Defensa';
import { Capacitacion } from './Components/Capacitacion';
/**
 * HomeCont Component: Contenedor principal donde se construye todo el contenido de la pagina
 * @returns {ReactElement} ReactElement
 */
export function ServiceCont(): ReactElement {
  // -----------------------RENDER
  return (
    <Row className="ServiceCont">
      <Prevencion />
      <Mediacion />
      <Defensa />
      <Capacitacion />
    </Row>
  );
}
