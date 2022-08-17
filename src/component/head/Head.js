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
          <div className='inline'>
              <AddIcCallIcon className='i phone icon'/>
              <label>+880 1751-040462</label>
          </div>
          <div className='inline'>
            <MailIcon className="i email icon"/>
            <label>proshantosaha79@gmail.com</label>
           </div>
        </div>

        <div className='right row RText'>
                <h3>Theme FAQ'S</h3>
                <h3>Need Help</h3>
                <h3></h3>
                <h3>EN</h3>
                <h3></h3>
                <h3>USD</h3>
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