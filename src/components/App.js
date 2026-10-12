import { createRoot } from 'react-dom/client';
import './index.css';
import logo from 'url:./logo.png';

/*
->header:
  logo
  nav items
->Body:
  -search
  -Restraunt container
   :image
   :name,rating,cuisine etc
->footer:
  -copyright
  -links
  -Address
  -contact
*/



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

const styleCard={
  backgroundColor:"aqua"
} 

const RestaurantCard = ({resname,cuisine})=>{
  return(
   <div className='res-card' style={styleCard}>
    <h3>{resname}</h3>
    <h4>{cuisine}</h4>
   </div> 
  )
}

const Body=()=>{
  return (
    <div className='body'>
      <div className='search'> SEARCH </div>
      <div className='res-container'>
      <RestaurantCard
        resname="Meghana Foods"
        cuisine="Biryani,North Indian,Asian"
      />
      <RestaurantCard
      resname="KFC"
        cuisine="Burger ,Nuggets , Fast Food"  
      />
      </div>
    </div>
  )
}

const AppLayout=()=>{
  return (
    <div className='app'>
    <Header/>
    <Body/>
    </div>
  )
};

const root = createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
