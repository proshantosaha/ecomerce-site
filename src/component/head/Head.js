import React from 'react'
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import './head.scss'

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';

export default function Head() {
  return (

    <section className='head'>
      <div className='container d_flex'>
        <div className='left row'>
            <AddIcCallIcon className='i phone'/>
            <label>+880 1751-040462</label>
            <MailIcon className="i email"/>
            <label>proshantosaha79@gmail.com</label>
        </div>

        <div className='right row RText'>
                <label>Theme FAQ'S</label>
                <label>Need Help</label>
                <span></span>
                <label>EN</label>
                <span></span>
                <label>USD</label>
        </div>
      </div>
      
        </section>
    
  )
}



  


// >
// <ul className='right'>
// <li>

//     <a href='/cart'>
//         <span className='shoppingCart'>
//             <ShoppingCartSharpIcon className='cart'/>
//         <span className="cartCount">0</span>
//         </span>
// </a>
// </li>
// </ul>