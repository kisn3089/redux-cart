import { isCartActions } from './cart';
import { productItemActions } from './productItem';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://redux-cart-3645d-default-rtdb.firebaseio.com/cart.json'
            );

            if(!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(productItemActions.replaceCart({
                productItem: cartData.productItem || [],
                totalItem: cartData.totalItem,
            }));
        } catch (error) {
            dispatch(isCartActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
              }));
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(isCartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
          }));

          const sendRequest = async () => {
            const response = await fetch(
                'https://redux-cart-3645d-default-rtdb.firebaseio.com/cart.json', {
                  method: 'PUT',
                  body: JSON.stringify({
                    productItem: cart.productItem,
                    totalItem: cart.totalItem,
                  }),
                });
          
                if(!response.ok) {
                  throw new Error('Sending cart data failed!');
                }
          };

          try {
              await sendRequest();

              dispatch(isCartActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sending cart data successfully!'
                }));
          } catch (error) {
            dispatch(isCartActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
              }));
          }
    }
}
