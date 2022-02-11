export const add_to_cart = (id) => {
  return { type: 'ADD', payload: {id} }
}
export const remove_to_cart = (id) => {
  return { type: 'REMOVE', payload: {id} }
}