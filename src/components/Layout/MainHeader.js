import { NavLink } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/welcome'>Welcome!</NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to='/cart'>Cart</NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to='/quotes'>Quotes</NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to='/new-quote'>New Quote</NavLink>
          </li>

          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
