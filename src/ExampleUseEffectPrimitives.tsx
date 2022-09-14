import { CartItem } from "./CartItem";

const ExampleUseEffectPrimitives: React.FunctionComponent = () => {
  const currentItem = {
    name: "Skidor",
    quantity: 2,
    price: 49.99,
  };

  return (
    <>
      <h1>Prefer primitives in useEffect dependencies</h1>
      <blockquote>
        useEffect will re-render because it can't compare objects properly
        <br />
        <a href="https://www.30secondsofcode.org/articles/s/react-use-effect-primitive-dependencies">
          https://www.30secondsofcode.org/articles/s/react-use-effect-primitive-dependencies
        </a>
      </blockquote>

      <CartItem item={{ ...currentItem }} />
    </>
  );
};

export { ExampleUseEffectPrimitives };
