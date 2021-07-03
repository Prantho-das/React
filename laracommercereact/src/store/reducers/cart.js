let initialstate = {
  name: "prantho",
};
function cart(state = initialstate, action) {
  switch (action.type) {
    case "CART_ADD":
      return (state = { ...state, name: "prantho das" })
    default:
      return state;
  }
}
export default cart;
