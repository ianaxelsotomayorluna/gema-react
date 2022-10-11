// ---Dependencies
import { ReactElement } from 'react';
// ---Images
import Licenciada from 'Images/56baab4ab8ad6dbc6afd.webp';
import { Col } from 'antd';

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function FotoLic(): ReactElement {
  // -----------------------RENDER
  return (
    <Col className="Foto" xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
      <h1>Lic. Gema Ayecac</h1>
      <img src={Licenciada} alt="Esta imagen aun no es visible" width={350} />
    </Col>
  );
}
