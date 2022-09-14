import { CalculateFactorial } from "./CalculateFactorial";

const ExampleUseMemo: React.FunctionComponent = () => (
  <>
    <h1>useMemo to avoid re-rendering</h1>
    <blockquote>
      useMemo prevents re-calculations of values when their dependencies haven't
      changed.
      <br />
      <a href="https://dmitripavlutin.com/react-usememo-hook/">
        https://dmitripavlutin.com/react-usememo-hook/
      </a>
    </blockquote>

    <CalculateFactorial />
  </>
);

export { ExampleUseMemo };
