import { For } from "solid-js";
import type { Color } from "../types";
import ColorBox from "./ColorBox";
import { children } from "solid-js";

type ColorChartProps = {
  colors: Color[];
};

function ColorChart(props: ColorChartProps) {
  const colors = children(() => props.colors);
  console.log(colors(), "<- colors in ColorChart");
  return (
    <section class="flex flex-wrap justify-center items-center gap-4">
      <For each={colors()}>{(color) => <ColorBox color={color} />}</For>
    </section>
  );
}

export default ColorChart;
