import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; //HOC
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      { 
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        :
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      }
      <CartIcon />
    </div>
    {
      !hidden ? <CartDropdown /> : null
    }
  </div>
)

// const mapStateToProps = state => ({ Better way to do it double destructure bellow
//   currentUser: state.user.currentUser,
//   showCart: state.cart.hidden
// })

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
