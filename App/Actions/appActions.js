export const UPDATE_ORDER = 'UPDATE_ORDER';
export const PLACE_ORDER = 'PLACE_ORDER';
export const NEXT_STEP = 'NEXT_STEP';

export const updateOrder = update => ({
  type: UPDATE_ORDER,
  update
});

export const placeOrder = () => ({
  type: PLACE_ORDER
});

export const nextStep = () => ({
  type: NEXT_STEP
});
