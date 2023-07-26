import { useCallback } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext(" ");

export const useCartContext = () => useCallback(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  function clearCart() {
    setCart([]);
  }

  function isInCart(id) {
    return cart.find((product) => product.id === id) ? true : false;
  }

  function removeProduct(id) {
    setCart(cart.filter((product) => product.id !== id));
  }
  function addProduct(item, cantidad) {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.cantidad += cantidad;
      newCart = [...cart];
    } else {
      product = { ...item, cantidad: cantidad };
      newCart = { ...cart, product };
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
