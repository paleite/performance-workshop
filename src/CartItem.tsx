import * as React from "react";

type Item = {
  name: string;
  quantity: number;
  price: number;
};

type CartItemProps = {
  item: Item;
};

let renderCountNonPrimitive = 0;
let renderCountPrimitive = 0;

const CartItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
  const { name, quantity, price } = item;
  React.useEffect(() => {
    console.log(
      `Non-primitive: "${item.name}" quantity has changed to ${item.quantity}.`
    );
    renderCountNonPrimitive++;
  }, [item]);

  // React.useEffect(() => {
  //   console.log(`Primitive: "${name}" quantity has changed to ${quantity}.`);
  //   renderCountPrimitive++;
  // }, [name, quantity]);

  return (
    <>
      <h3>{name}</h3>
      <span>
        {price} x {quantity}
      </span>
      <span>
        Render counter:
        <br />
        {renderCountNonPrimitive !== 0
          ? `Non-Primitive: ${renderCountNonPrimitive}`
          : ""}
        <br />
        {renderCountPrimitive !== 0 ? `Primitive: ${renderCountPrimitive}` : ""}
        <br />
      </span>
    </>
  );
};

export type { CartItemProps, Item };
export { CartItem };
