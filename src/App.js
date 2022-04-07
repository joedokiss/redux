import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment, useEffect } from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { uiActions } from './store/slices/ui-slice'

let isInitial = true;

function App() {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.ui.notification)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  const fetchUrl = 'https://http-demo-7cf15-default-rtdb.firebaseio.com/cart.json'

  useEffect(() => {
    const dispatchNotification = (payload) => {
      const { status, title, message } = payload

      dispatch(uiActions.showNotification({ status, title, message }))
    }

    const sendCartData = async () => {
      dispatchNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })

      const response = await fetch(fetchUrl,
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {
        throw new Error('Failed to send cart data!')
      }

      dispatchNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      })
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch(error => {
      dispatchNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      })
    })
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
