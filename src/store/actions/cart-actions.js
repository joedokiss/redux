// Action creator
import {uiActions} from "../slices/ui-slice";
import {cartActions} from "../slices/cart-slice";

const firebaseHost = 'https://http-demo-7cf15-default-rtdb.firebaseio.com'

const dispatchNotification = (dispatch, payload) => {
    const { status, title, message } = payload

    dispatch(uiActions.showNotification({ status, title, message }))
}

export const sendCartDataAction = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            dispatchNotification(dispatch,{
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })

            const response = await fetch(`${firebaseHost}/cart.json`,
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                })

            if (!response.ok) {
                throw new Error('Failed to send cart data!')
            }
        }

        try {
            await sendRequest()
            dispatchNotification(dispatch,{
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            })
        } catch (error) {
            dispatchNotification(dispatch,{
                status: 'error',
                title: 'Error!',
                message: 'Failed to send cart data!'
            })
        }
    }
}

export const fetchCartDataAction = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`${firebaseHost}/cart.json`, {
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error('Failed to fetch the data!')
            }

            return await response.json()
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart(cartData))

            dispatchNotification(dispatch,{
                status: 'success',
                title: 'Success!',
                message: 'Fetched the data successfully!'
            })
        } catch (error) {
            dispatchNotification(dispatch,{
                status: 'error',
                title: 'Error!',
                message: 'Failed to fetch the data!'
            })
        }
    }
}