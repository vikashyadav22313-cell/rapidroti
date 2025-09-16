import "./App.css";
import { Bill } from "./component/Bill";
import { useState } from "react";
import { FoodList } from "./component/FoodList";
import { ConfirmOrder } from "./component/ConfirmOrder";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [confirmCart, setConfirmCart] = useState(false);
  console.log(cartItems);

  const handlePlus = (item) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };
  const handleMinus = (item) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };
  const handleConfirmOrder = () => {
    setConfirmCart(true);
    console.log("hello");
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existProduct = prev.find((i) => i.name == item.name);
      if (existProduct) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <section className="container">
      <main>
        <section className="food-container">
          <h1>Desserts</h1>
          <FoodList
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            handleAddCart={handleAddToCart}
            cartItems={cartItems}
          />
        </section>
        <Bill
          cartItems={cartItems}
          setCartItems={setCartItems}
          confirmCart={confirmCart}
          handleConfirmOrder={handleConfirmOrder}
          setConfirmCart={setConfirmCart}
        />
        {confirmCart && (
          <ConfirmOrder
            cartItems={cartItems}
            setCartItems={setCartItems}
            confirmCart={confirmCart}
            handleConfirmOrder={handleConfirmOrder}
            setConfirmCart={setConfirmCart}
          />
        )}
      </main>
    </section>
  );
};
export default App;
