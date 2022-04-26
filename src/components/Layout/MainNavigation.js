import { NavLink } from 'react-router-dom'
import CartButton from '../Cart/CartButton'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Great Quotes
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/products' activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart'>
              <CartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation