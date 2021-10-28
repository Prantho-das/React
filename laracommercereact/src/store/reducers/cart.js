let initialstate = {
  cart: [],
};
function cart(state = initialstate, action) {
  switch (action.type) {
    case "CART_ADD":
      return (state = [ ...state ])
    default:
      return state;
  }
}
export default cart;
