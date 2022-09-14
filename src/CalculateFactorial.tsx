import * as React from "react";

function factorialOf(n: number): number {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1em",
};

const CalculateFactorial = () => {
  const [number, setNumber] = React.useState(1);
  const [inc, setInc] = React.useState(0);

  // factorialOf will be called even if `number` is unchanged
  const factorial = factorialOf(number);

  // factorialOf will not be called unless `number` changes
  // const factorial = React.useMemo(() => factorialOf(number), [number]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    return setInc((i) => i + 1);
  };

  return (
    <div style={style}>
      <div>inc: {inc}</div>
      <div>
        Factorial of
        <input type="number" value={number} onChange={onChange} />
        is {factorial}
      </div>
      <div>
        <button onClick={onClick}>Increase `inc` (Re-render)</button>
      </div>
    </div>
  );
};

export { CalculateFactorial };
