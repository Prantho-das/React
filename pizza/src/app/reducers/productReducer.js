const init = {
    product: []
};
export const productReducer = (state = init, { type, payload }) => {
    switch (type) {
        case "FETCH_ALL_PRODUCT":
            state = { ...state, product:[...payload] }
            return state
        default:
            return state;
    }
}