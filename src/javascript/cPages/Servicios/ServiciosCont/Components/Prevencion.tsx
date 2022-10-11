// ---Dependencies
import { ReactElement } from 'react';
import { Col } from 'antd';

// ---UI Dependencies
import Icono from 'Images/logo.png';
/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function Prevencion(): ReactElement {
  // -----------------------RENDER
  return (
    <Col className="Prevencion" xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
      <h1>PREVENCIÓN</h1>
      <section>
        <img src={Icono} alt="No existe" width="50px" />
        <ul>
          <li>
            <p>Cumplimiento</p>
          </li>
          <li>
            <p>Auditoria</p>
          </li>
        </ul>
      </section>
    </Col>
  );
}
