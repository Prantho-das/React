const init = {
  cart: []
}
export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case "ADD":
      var find = state.cart.findIndex((data) => data.id === payload.id)
      if (find !== -1) {
        if (state.cart[find].quantity === 5) {
          return state
        }
        state.cart[find].quantity = state.cart[find].quantity + 1
      } else {
        state = { ...state, cart: [...state.cart, { ...payload, quantity: 1 }] }
      }
      return state
    case "REMOVE":
      let found = state.cart.findIndex((data) => data.id === payload.id)
      if (found) {
        if (state.cart[found].quantity === 1) {
          state.cart = state.cart.filter((data) => data.id !== payload.id)
          return state
        }
        state.cart[found].quantity = state.cart[found].quantity - 1
      }
      return state
    default:
      return state
  }
}
