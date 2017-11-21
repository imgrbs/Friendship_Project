import React from 'react'

const Navbar = () => (
  <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
    <a className='navbar-brand' href='#'>
      Navbar
    </a>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <a className='nav-link' href='#'>
            Home <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Link
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            Disabled
          </a>
        </li>
      </ul>
      <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
        Search
      </button>
    </div>
  </nav>
)

export default Navbar
