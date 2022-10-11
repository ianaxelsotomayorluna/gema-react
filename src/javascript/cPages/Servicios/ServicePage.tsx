// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import { ServiceCont } from './ServiciosCont/ServiceCont';
/**
 * Componente HomePage: este componente es para dar datos al Helmet de
 * la página y concatenarla con el contenedor de la página componente
 * @returns { ReactElement } ReactElement
 */
export function ServicePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>GEMAAYECAC | Sevicios</title>
      </Helmet>
      <ServiceCont />
    </>
  );
}
