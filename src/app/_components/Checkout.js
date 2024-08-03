import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../context/CartContext';

const Checkout = ({handleCheckout}) => {
  const { cart } = useCart();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    if (!address) {
      alert('Please enter your address');
      return;
    }

    setOrderPlaced(true);
    setShowModal(false);

    handleCheckout();
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Checkout
      </button>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">

                {orderPlaced ? (
                  <div className="alert alert-danger" role="alert">
                    No items in the cart
                  </div>
                ) : (
                  <form>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Payment Method</label>
                      <select
                        className="form-select"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <option value="cash-on-delivery">Cash on Delivery</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Total Amount: ₹{totalAmount}</label>
                    </div>
                  </form>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-success" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
