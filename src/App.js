import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment, useEffect } from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import {fetchCartDataAction, sendCartDataAction} from "./store/actions/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.ui.notification)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchCartDataAction())
  },[dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartDataAction(cart))
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification data={notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
