import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set, get) => ({
    cartItems: [],
    cartTotal: 0,
    addToCart: (item, qty = null) => {
      let itemPos = get().cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      let cartItems = [];
      if (itemPos != -1) {
        cartItems = get().cartItems;
        if (qty) {
          cartItems[itemPos].quantity = qty;
        } else {
          cartItems[itemPos].quantity += 1;
        }
      } else {
        cartItems = [...get().cartItems, item];
      }
      let total = cartItems.reduce((acc, item) => {
        acc += item.price;
        return acc;
      }, 0);
      set({
        cartItems,
        cartTotal: total,
      });
    },
    removeCart: (item) => {
      let cartItems = get().cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      
      let total = cartItems.reduce((acc, item) => {
        acc += item.price;
        return acc;
      }, 0);
      set({
        cartItems,
        cartTotal: total,
      });
    },
    clearCart: () => {
      set({
        cartItems: [],
        cartTotal: 0,
      });
    },
  }))
);

export default useCartStore;

// 'item',
// {
//   id: 20,
//   title: 'DANVOUY Womens T Shirt Casual Cotton Short',
//   price: 12.99,
//   description:
//     '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
//   category: 'women\'s clothing',
//   image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
//   rating: { rate: 3.6, count: 145 }
// }
