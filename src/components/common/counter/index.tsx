import { Accessor, createEffect, createSignal } from "solid-js";
import "./index.scss";

const Wheel = ({
  ref,
}: {
  ref: HTMLSpanElement | ((el: HTMLSpanElement) => void) | undefined;
}) => {
  return (
    <span ref={ref} class="wheel">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <div class={`${value}`}>{value}</div>
      ))}
    </span>
  );
};

const Counter = ({ value }: { value: Accessor<number> }) => {
  const [values, setValues] = createSignal([0, 0, 0]);

  let wheel0: HTMLSpanElement | ((el: HTMLSpanElement) => void) | undefined;
  let wheel1: HTMLSpanElement | ((el: HTMLSpanElement) => void) | undefined;
  let wheel2: HTMLSpanElement | ((el: HTMLSpanElement) => void) | undefined;

  const scrollWheel = async (wheel: HTMLSpanElement, value: number) => {
    const target = wheel.getElementsByClassName(`${value}`)[0];
    target.scrollIntoView();
    await new Promise((resolve) => setTimeout(resolve, 300));
  };
  createEffect(async () => {
    const valueStrSplit = (value() % 1000).toString().split("");
    const valueSplit = valueStrSplit.map((val) => parseInt(val));
    valueSplit.reverse();

    const _values = [...valueSplit, 0, 0].slice(0, 3);
    _values.reverse();

    let shouldUpdate =
      _values[0] !== values()[0] ||
      _values[1] !== values()[1] ||
      _values[2] !== values()[2];

    // if (window.scrollY !== 0) {
    await scrollWheel(wheel2 as HTMLSpanElement, _values[2]);
    await scrollWheel(wheel1 as HTMLSpanElement, _values[1]);
    await scrollWheel(wheel0 as HTMLSpanElement, _values[0]);
    // }

    if (shouldUpdate) setValues(_values);
  });

  return (
    <span class="counter" style={{ width: `4ch` }}>
      <Wheel ref={wheel0} />
      <Wheel ref={wheel1} />
      <Wheel ref={wheel2} />
    </span>
  );
};

export default Counter;
