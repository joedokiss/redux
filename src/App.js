import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment, useEffect } from 'react'

import Layout from './components/Layout/Layout';
import Notification from './components/UI/Notification'
import { fetchCartDataAction, sendCartDataAction } from "./store/actions/cart-actions";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AllQuotes from './components/Pages/AllQuotes';
import QuoteDetail from './components/Pages/QuoteDetail';
import NewQuote from './components/Pages/NewQuote';
import NotFound from './components/Pages/NotFound';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';

let isInitial = true;

function App() {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.ui.notification)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchCartDataAction())
  }, [dispatch])

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
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
