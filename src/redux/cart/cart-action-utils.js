export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemExists) {
    return cartItems.map((item) => {
      if (item.id === itemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }
  return [
    ...cartItems,
    {
      ...itemToAdd,
      quantity: 1,
    },
  ];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.reduce((acc, item) => {
    if (item.id === itemToRemove.id) {
      if (item.quantity === 1) {
        return acc;
      }
      return [...acc, { ...item, quantity: item.quantity - 1 }];
    }
    return [...acc, item];
  }, []);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.reduce(
    (acc, item) => (item.id === itemToClear.id ? acc : [...acc, item]),
    []
  );
};
