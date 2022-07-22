import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { isCartActions } from './store/cart';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCart = useSelector(state => state.isCart.isCart);
  const cart = useSelector(state => state.productItem);
  const notification = useSelector(state => state.isCart.notification);

  useEffect(() => {
    const snedCartData = async () => {
      dispatch(isCartActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));
      const response = await fetch(
      'https://redux-cart-3645d-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });


      if(!response.ok) {
        throw new Error('Sending cart data failed!');
      }
  
      dispatch(isCartActions.showNotification({
        status: 'Success',
        title: 'Success!',
        message: 'Sending cart data successfully!'
      }));
    };

    if(isInitial) {
      isInitial = false;
      return;
    }

    snedCartData().catch(error => {
      dispatch(isCartActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    });
  },[cart, dispatch]);

  return (
    <>
      {notification && (
      <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />)}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
