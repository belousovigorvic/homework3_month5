import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link className={classes.link} to={'/'}>
              Posts
            </Link>
          </li>
          <li>
            <Link className={classes.link} to={'/create__post'}>
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
