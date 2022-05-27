import freeCodeCampLogo from '../imagenes/freecode.png';
import '../hojas-de-estilo/Logo.css';

function Logo() {
  <div className='freecodecamp-logo-contenedor'>
    <img 
      src={freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp' />
  </div>
}

export default Logo;