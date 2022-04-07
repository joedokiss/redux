// Action creator
import {uiActions} from "../slices/ui-slice";

const firebaseHost = 'https://http-demo-7cf15-default-rtdb.firebaseio.com'

export const sendCartDataAction = (cart) => {
    return async (dispatch) => {
        const dispatchNotification = (payload) => {
            const { status, title, message } = payload

            dispatch(uiActions.showNotification({ status, title, message }))
        }

        const sendRequest = async () => {
            dispatchNotification({
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
            dispatchNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            })
        } catch (error) {
            dispatchNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            })
        }
    }
}