export const Bill = ({
  cartItems,
  setCartItems,
  confirmCart,
  setConfirmCart,
  handleConfirmOrder,
}) => {
  const handleDelete = (item) => {
    setCartItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  return (
    <section className="bill-corner">
      <h2>{`Your Cart (${cartItems.length})`}</h2>
      {cartItems.length === 0 ? (
        <div className="empty">
          <img src="../images/illustration-empty-cart.svg" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div>
          <ul className="ordered-box">
            {cartItems.map((item) => (
              <li key={item.name} className="bill-item">
                <div>
                  <h4>{item.name}</h4>
                  <div className="ordered-item">
                    <span className="quantity">{item.quantity}x</span>
                    <span>@${item.price}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>

                <span className="close" onClick={() => handleDelete(item)}>
                  <img src="./images/icon-remove-item.svg" />
                </span>
              </li>
            ))}
          </ul>
          <div className="billing-order">
            <div className="order-preview">
              <p>Order Total</p>
              <p className="total-amount">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <div className="nature">
              <img src="../images/icon-carbon-neutral.svg" />
              <p>This is a carbon-neutral delivery</p>
            </div>
            <button
              className="confirm-Btn"
              onClick={handleConfirmOrder}
              disabled={cartItems.length === 0}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
