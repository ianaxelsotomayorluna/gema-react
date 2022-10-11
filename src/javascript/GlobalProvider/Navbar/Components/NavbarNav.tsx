/* eslint-disable react/button-has-type */
// ---Dependencies
import { Col, Row } from 'antd';
import { ReactElement } from 'react';
import Icono from 'Images/logo.png';
// ---UI Dependencies

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function NavbarNav(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Row>
      <Col className="navCont" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <a href="/">
          <section>
            <img src={Icono} alt="no existe" width="50px" />
            GEMA
            <span>AYECAC</span>
            ABOGADOS
          </section>
        </a>
      </Col>
      <Col className="navNav" xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
        <nav>
          <Row>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
              <button>
                <a className="inicio" href="/">
                  INICIO
                </a>
              </button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
              <button>
                <a href="Servicios">SERVICIOS</a>
              </button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
              <button>
                <a href="Contacto">CONTACTO</a>
              </button>
            </Col>
          </Row>
        </nav>
      </Col>
    </Row>
  );
}
