import { createRoot } from 'react-dom/client';
import './index.css';
import logo from 'url:./logo.png';

const Header=()=>{
  return (
    <div className='header'>
    <div children className='logo-container'>
    <img className='logo' src={logo} alt='Hungry-bowl-logo'/>
    </div>

      <div className='nav-items'>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const AppLayout=()=>{
  return (
    <div className='app'>
    <Header/>
    </div>
  )
};

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
