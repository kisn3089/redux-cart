import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { isCartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.productItem.totalItem);

  const isCart = () => {
    dispatch(isCartActions.showCart());
  }

  return (
    <button className={classes.button} onClick={isCart} >
      <span>My Cart</span>
      {items > 0 && <span className={classes.badge}>{items}</span>}
    </button>
  );
};

export default CartButton;
