/* eslint-disable react/button-has-type */
// ---Dependencies
import { Col, Row } from 'antd';
import { ReactElement } from 'react';
import { LinkedinFilled, WhatsAppOutlined, YoutubeFilled, MailOutlined } from '@ant-design/icons';

// ---UI Dependencies

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function RedSocial(): ReactElement {
  // -----------------------RENDER
  return (
    <>
      <h1>Contáctanos</h1>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <a href="https://www.linkedin.com/in/gema-ayecac-48498292/" target="blank">
            <LinkedinFilled style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>Linkedin</p>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <a href="https://api.whatsapp.com/send/?phone=525541851471" target="blank">
            <WhatsAppOutlined style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>55 4185 1471</p>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <a href="https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg" target="blank">
            <YoutubeFilled style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>youtube</p>
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <a href="gayecac@amasbconsultores.com" target="blank">
            <MailOutlined style={{ fontSize: '30px', color: '#f47e20' }} />
            <p>gayecac@amasbconsultores.com</p>
          </a>
        </Col>
      </Row>
    </>
  );
}
