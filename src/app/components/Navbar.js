"use client"
import React, { useEffect, useState } from 'react'  
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

function Navbar() {
  
  const router = useRouter();
  const { cart } = useCart();
  const [loginToken , setLoginToken] = useState(''); 
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const { data: session } = useSession();

  useEffect(()=>{
    setLoginToken(localStorage.getItem('loginToken') || '');

  },[])
  
  const handleLogout=()=>{
    localStorage.removeItem("loginToken");
    router.push("/login")
  }

  return (
    <div className='container mb-3 px-4'>
        <nav className="navbar navbar-expand-lg mt-auto mb-auto">
        <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
        <i className="fa-solid fa-bars"></i>
        </button>
        <Link className="navbar-brand" href="/">GoFood</Link>
       
        <form id="navbar-search" className="mobile-search form-inline" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div id="nav-collapse" className="collapse navbar-collapse nav-temp">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about"  className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
          </ul>

          {
            loginToken !== '' ? 
            <div className='d-flex ms-3'>
           
            <button className='btn border d-flex' onClick={()=>router.push('/cart')}>Cart <i>{"("}{totalItems}{")"}</i></button>
            <button type="button" className="btn btn-outline-primary btn-sm ms-4" onClick={()=>handleLogout()}>Logout</button> 
            </div>:
            <div className='d-flex m-3'>
            <button id="login-button" type="button" className="btn btn-outline-primary btn-sm m-1">
              <Link href="/login" className='auth-btn'>
                Login
              </Link>
              </button>
              <button id="signup-button" type="button" className="btn btn-outline-success btn-sm m-1">
              <Link className='auth-btn' href="/signup">Signup</Link>
            </button>
            </div>
          }
       
          </div>
      </div>
    </nav>

    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasLeft"
      aria-labelledby="offcanvasLeftLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasLeftLabel">GoFood</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div id="offcanvas-body" className="offcanvas-body mt-0">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page"> Home </a>
          </li>
          <li>
            <a href="/about" className="nav-link link-dark"> About </a>
          </li>
          <li>
            <a href="/contact" className="nav-link link-dark"> Contact US </a>
          </li>
        </ul>
        {
            session ? <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleLogout}>Logout</button> :
            <div className='d-flex m-3'>
            <button id="login-button" type="button" className="canvas-btn btn btn-outline-primary btn-sm m-1">
              <Link href="/login" className='auth-btn'>
                Login
              </Link>
              </button>
              <button id="signup-button" type="button" className="btn btn-outline-success btn-sm m-1">
              <Link className='auth-btn' href="/signup">Signup</Link>
            </button>
            </div>
          }
      
      </div>
    </div>
    </div>
  )
}

export default Navbar;
