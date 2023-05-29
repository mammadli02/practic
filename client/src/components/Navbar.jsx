import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<ul>
    <li>
        <Link to='/hello'  > HOME</Link>
    </li>
    <li>
        <Link to='/add'  > ADD</Link>
    </li>
</ul>

</>  )
}

export default Navbar