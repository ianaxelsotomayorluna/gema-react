// ---Dependencies
import { Col } from 'antd';
import { ReactElement } from 'react';
import { Certificaciones } from './Certificaciones';
// ---UI Dependencies

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function TextoInformativo(): ReactElement {
  // -----------------------RENDER
  return (
    <Col className="textoInfo" xs={24} sm={24} md={12} lg={12} xl={14} xxl={14}>
      <h2>Semblanza</h2>
      <p>
        Gema Ayecac, es abogada por la Universidad Nacional Autónoma de México (UNAM), cuenta con
        estudios de Maestría por el Instituto Tecnológico Autónomo de México (ITAM). Cuenta con
        amplia capacitación en diversas instituciones como lo son la Universitat de Barcelona, la
        Universidad de Buenos Aires, Universidad de Cantabria, Asociación Argentina de Estudios
        Fiscales, entre otras.
        <br /> <br /> Cuenta con 17 años de ejercicio profesional en el área corporativa y fiscal.
        Actualmente es asociada de la World Compliance Association y socia fundadora de Consultores
        y Asesores Especializados, Consultoría creada en el 2010. <br /> <br />
        Es Mediadora Privada Número 520, certificada por el Tribunal Superior de Justicia de la
        Ciudad de México. <br /> <br />
        Es Especialista en Mediación y Negociación por el Instituto de Mediación de México (IMM) y
        se encuentra doctorando en la misma institución. Miembro del Colegio Nacional de Mediadores
        Certificados (CONAMEC) Es docente en la Universidad Nacional Autónoma de México y ha sido
        ponente en diversos foros académicos y empresariales. Actúa también como agente capacitador
        registrado ante la Secretaría del Trabajo y Previsión Social en sus áreas de competencia.
      </p>
      <Certificaciones />
    </Col>
  );
}
