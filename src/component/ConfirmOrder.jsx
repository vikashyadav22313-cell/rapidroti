export const ConfirmOrder = ({
  cartItems,
  setCartItems,
  confirmCart,
  setConfirmCart,
  handleConfirmOrder,
}) => {
  const handleNewOrder = () => {
    setConfirmCart(false);
    setCartItems([]);
  };
  console.log(cartItems);
  return (
    <div className="confirm-box">
      <div className="confirmDetail">
        <div className="hope-text">
          <img src="./images/icon-order-confirmed.svg" alt="order-confirm"/>
          <h4>Order Confirmed</h4>
          <p>We hope you enjoy your food!</p>
        </div>

        <section
          className="bill-corner"
          style={{ backgroundColor: "hsl(13, 31%, 94%)" }}
        >
          <div>
            <ul className="ordered-box">
              {cartItems.map((item, index) => (
                <li key={item.name} className="bill-item">
                  <div>
                    <div className="imageFood-con">
                      <img
                        src={cartItems[index].image.thumbnail}
                        alt={cartItems.name}
                        style={{ width: "4rem", height: "4rem" }}
                      />
                      <div className="confirmQuantity">
                        <h4>{item.name}</h4>
                        <div>
                          <span className="quantity">{item.quantity}x</span>
                          <span className="cost">@${item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ordered-item confirm_item"></div>
                  </div>
                  <span className="individual-price">
                    ${(item.price * item.quantity).toFixed(2)}
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

              <button className="confirm-Btn" onClick={handleNewOrder}>
                New Order
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
