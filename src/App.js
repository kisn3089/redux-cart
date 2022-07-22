import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCart = useSelector(state => state.isCart.isCart);
  const cart = useSelector(state => state.productItem);
  const notification = useSelector(state => state.isCart.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
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
