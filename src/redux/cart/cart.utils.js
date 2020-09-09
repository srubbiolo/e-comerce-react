export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map( cartItem => 
      cartItem.id === cartItemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  //the first time it goes through here otherwise it adds
  return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}