/* eslint-disable react/button-has-type */
// ---Dependencies
import { Col } from 'antd';
import { ReactElement } from 'react';
import Icono from 'Images/logo.png';
// ---UI Dependencies

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function ContactLogo(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Col className="ContactLogo" xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
      <img src={Icono} alt="no existe" width="90px" />
      <section>
        GEMA
        <span>AYECAC</span>
      </section>
      <h1>ABOGADOS</h1>
    </Col>
  );
}
