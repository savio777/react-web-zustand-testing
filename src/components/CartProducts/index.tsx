import { useCartStore } from "../../store/CartStore";
import { valueFormatterBR } from "../../utils/formatter";

import { Box, Container } from "./styles";

const CartProducts = () => {
  const [cartItems, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  const sumTotal = cartItems.reduce(
    (previous, currentValue) => previous + currentValue.price,
    0
  );

  return (
    <>
      <h1>Cart: {valueFormatterBR(sumTotal)}</h1>
      <Container>
        {cartItems.map((item, index) => (
          <Box key={String(index)}>
            <h5>{item.name}</h5>
            <p>{valueFormatterBR(item.price)}</p>

            <button onClick={() => removeFromCart(item.id)}>
              remove to cart
            </button>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default CartProducts;
