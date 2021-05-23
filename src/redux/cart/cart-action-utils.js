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
