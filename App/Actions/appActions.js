export const UPDATE_ORDER = 'UPDATE_ORDER';
export const PLACE_ORDER = 'PLACE_ORDER';

export const updateOrder = update => ({
  type: UPDATE_ORDER,
  update
});

export const placeOrder = () => ({
  type: PLACE_ORDER
});
