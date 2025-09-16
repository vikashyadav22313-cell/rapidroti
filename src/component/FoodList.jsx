import { useState } from "react";
import data from "../Api/data.json";
export const FoodList = ({
  handlePlus,
  handleAddCart,
  cartItems,
  handleMinus,
}) => {
  return (
    <ul className="grid-three">
      {data.map((cuEl, index) => {
        return (
          <li className="sep-food" key={index}>
            <img src={cuEl.image.desktop} className="image-size" />
            <div
              className="cart-section"
              style={{
                backgroundColor: cartItems.find((i) => i.name === cuEl.name)
                  ? "hsl(14, 86%, 42%)"
                  : "",
              }}
            >
              {!cartItems.some((i) => i.name === cuEl.name) && (
                <div className="displayCart">
                  <div className="cartKaro" onClick={() => handleAddCart(cuEl)}>
                    <img src="./images/icon-add-to-cart.svg" />
                    <p>Add to Cart</p>
                  </div>
                </div>
              )}
              {cartItems.some((i) => i.name === cuEl.name) && (
                <div className="toggle-box">
                  <div className="toggle-section">
                    <div className="icon-toggle">
                      <img
                        src="./images/icon-decrement-quantity.svg"
                        onClick={() => handleMinus(cuEl)}
                      />
                    </div>
                    <p className="selected-quantity">
                      {" "}
                      {cartItems.find((i) => i.name === cuEl.name)?.quantity ||
                        0}
                    </p>
                    <div className="icon-toggle">
                      <img
                        src="./images/icon-increment-quantity.svg"
                        onClick={() => handlePlus(cuEl)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="food-info">
              <p className="category">{cuEl.category}</p>
              <h3>{cuEl.name}</h3>
              <p className="price">{` $${cuEl.price.toFixed(2)}`}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
