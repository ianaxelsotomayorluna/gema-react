// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function Certificaciones(): ReactElement {
  // -----------------------RENDER
  return (
    <div className="container-final">
      <h4>CERTIFICACIONES</h4>
      <ul>
        <li>
          <a href="https://www.poderjudicialcdmx.gob.mx/cja/mediacion-privada-2/#" target="blanck">
            <p>Tribunal Superior de Justicia</p>
          </a>
        </li>
        <li>
          <a href="https://www.conamec.com/docs/MEDIADORES_COLEGIADOS_2021.pdf" target="blanck">
            <p>Colegio Nacional de Mediadores Certificados (CONAMEC)</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
