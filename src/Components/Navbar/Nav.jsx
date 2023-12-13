import React from 'react'
import "./nav.css"
export default function Nav() {
  return (
/*<nav className="navbar navbar-expand-lg bg-body-tertiary text fixed-top ">
  <div className="container custom-container ">
    <a className="navbar-brand" href="#" style={{color: 'white', fontFamily: '"Dosis", sans-serif', fontWeight: 800, fontSize: 22 }}>Foodies<span style={{color: 'rgb(245, 117, 43)'}}>Hup</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{fontSize: '10px !important', color: 'white', backgroundColor: 'white'}}>
      <span className="navbar-toggler-icon" style={{color: 'white !important'}} />
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center mx-auto">
        <li className="nav-item ms-2">
          <a className="nav-link active1 text-white" aria-current="page" href="#" onclick="handleNavItem(this)">HOME</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link text-white" href="#collection" onclick="handleNavItem(this)">SEARCH</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link text-white" href="#Popular" onclick="handleNavItem(this)">FAVORITE</a>
        </li>
      </ul></div>
    <a href="shoppingCart.html">
  <i className="fa-solid fa-heart" style={{color: '#e5345b', fontSize: 25 }} />
</a>
 
  </div>
</nav>*/
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid container ">
  <p className="navbar-brand text-center" style={{color: 'white', fontFamily: '"Dosis", sans-serif', fontWeight: 800, fontSize: 22 }}>Foodies<span style={{color: 'rgb(245, 117, 43)'}}>Hup</span></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars text-white" />
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarNav">
      <ul className="navbar-nav text-center">
        <li className="nav-item me-4">
          <a className="nav-link text-light" aria-current="page" href="#home">HOME</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="#about">SEARCH</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="#">FAVORITE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}
