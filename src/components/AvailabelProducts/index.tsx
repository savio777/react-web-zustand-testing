import { useCartStore } from "../../store/CartStore";
import { valueFormatterBR } from "../../utils/formatter";

import { Box, Container } from "./styles";

const AvailabelProducts = () => {
  const [avaiblebleItems, addToCart] = useCartStore((state) => [
    state.avaiblebleItems,
    state.addToCart,
  ]);

  return (
    <>
      <h1>Choose a product</h1>

      <Container>
        {avaiblebleItems.map((item, index) => (
          <Box key={String(index)}>
            <h5>{item.name}</h5>
            <p>{valueFormatterBR(item.price)}</p>

            <button onClick={() => addToCart(item)}>add to cart</button>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default AvailabelProducts;
