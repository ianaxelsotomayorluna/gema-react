// ---Dependencies
import { ReactElement } from 'react';
// ---Images
import { Row, Col } from 'antd';
import { LinkedinFilled, WhatsAppOutlined, YoutubeFilled, MailOutlined } from '@ant-design/icons';

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function Contacts(): ReactElement {
  // -----------------------RENDER
  return (
    <Row className="Contactos">
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <a href="https://www.linkedin.com/in/gema-ayecac-48498292/" target="blank">
          <div>
            <LinkedinFilled style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>Linkedin</p>
          </div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <a href="https://api.whatsapp.com/send/?phone=525541851471" target="blank">
          <div>
            <WhatsAppOutlined style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>55 4185 1471</p>
          </div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <a href="gayecac@amasbconsultores.com" target="blank">
          <div>
            <MailOutlined style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>gayecac@amasbconsultores.com</p>
          </div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <a href="https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg" target="blank">
          <div>
            <YoutubeFilled style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>youtube</p>
          </div>
        </a>
      </Col>
    </Row>
  );
}
