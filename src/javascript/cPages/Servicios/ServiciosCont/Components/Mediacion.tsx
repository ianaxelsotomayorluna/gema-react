// ---Dependencies
import { ReactElement } from 'react';
import { Col } from 'antd';
// ---UI Dependencies
import Icono from 'Images/logo.png';
/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function Mediacion(): ReactElement {
  // -----------------------RENDER
  return (
    <Col className="Mediacion" xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
      <h1>MEDIACIÓN</h1>
      <section>
        <img src={Icono} alt="No existe" width="50px" />
        <ul>
          <li>
            <p>MASC</p>
          </li>
          <li>
            <p>Proceso de mediacion</p>
          </li>
          <li>
            <p>Es Mediable tu conflicto?</p>
          </li>
        </ul>
      </section>
    </Col>
  );
}
