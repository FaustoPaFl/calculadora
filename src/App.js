import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png'

function App() {
  return (
    <div className='App'>
     <div className='freecodecam-logo-contenedor'>
      <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
     </div>
    </div>
  );
}

export default App;
