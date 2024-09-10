// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import './index.css'
import CartContext from '../../context/CartContext'

class CartSummary extends Component {
  state = {orderConfirmed: false}

  onPlaceOrder = () => {
    this.setState({orderConfirmed: true})
  }

  render() {
    const {orderConfirmed} = this.state
    return (
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
              <p className="cart-quantity">{totalItemsInCart} items in cart</p>

              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <button className="checkout-btn" type="button">
                      Checkout
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div className="poped-up-container">
                        <h1 className="summary-heading"> Order Summary </h1>
                        <p className="items">
                          Items:
                          <span className="items-span">{totalItemsInCart}</span>
                        </p>
                        <p className="items">
                          Total Value:
                          <span className="items-span">{total}/-</span>
                        </p>

                        <h1 className="payment-heading">
                          Choose Payment Method
                        </h1>
                        <select className="select-dropdown">
                          <option disabled> UPI </option>
                          <option disabled> Card </option>
                          <option disabled> Net Banking </option>
                          <option disabled> Wallet </option>
                          <option> Cash on Delivery </option>
                        </select>

                        <button
                          type="button"
                          className="confirm-order-btn"
                          onClick={this.onPlaceOrder}
                        >
                          Confirm Order
                        </button>

                        <button
                          type="button"
                          className="back-btn"
                          onClick={() => close()}
                        >
                          Back
                        </button>
                        {orderConfirmed && (
                          <p className="summary-heading">
                            Your order has been placed successfully
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
