// ---Dependencies
import { ReactElement } from 'react';
import { Col } from 'antd';
// ---UI Dependencies
import Icono from 'Images/logo.png';
/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function Capacitacion(): ReactElement {
  // -----------------------RENDER
  return (
    <Col className="Capacitacion" xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
      <h1>CAPACITACIÓN</h1>
      <section>
        <img src={Icono} alt="No existe" width="50px" />
        <ul>
          <li>
            <p>Empresarial</p>
          </li>
          <li>
            <p>Inducciones</p>
          </li>
          <li>
            <p>Promocionales</p>
          </li>
        </ul>
      </section>
    </Col>
  );
}
