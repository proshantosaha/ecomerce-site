import React from 'react'
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import './search.scss'


const Search = () =>{

  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active",window.scrollY>100)
  })
  return (
    <>
     <section className='search'>
     
     <div className='container f_flex'>
     
          <h2 className='logo width'>PsEco</h2>
       

        <div className='search-box f_flex'>
            <SearchIcon className='iconSearch'/>
            <input type ="text" placeholder='search and hit the enter...'/>
            <span>All Category</span>
        </div>

        <div className='cartIcon f_flex width'>
          <PersonOutlineIcon className='icon-circle'/>
          <div className='cart'>
              <Link to ='/'>
                  <ShopIcon/>
                  <span>0</span>
              </Link>
          </div>
        </div>
        </div>
     </section>
    </>
  )
}


export default Search