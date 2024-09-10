// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItemsInCart = cartList.length
      let total = 0
      const cartTotalValue = cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="order-total">
            Order Total:
            <span className="order-total-span">Rs {total}</span>/-
          </h1>
          <p className="cart-quantity"> {totalItemsInCart} items in cart </p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
