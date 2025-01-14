import { For } from "solid-js";
import type { Color } from "../types";

type ColorChartProps = {
  colors: Color[];
};

function ColorChart({ colors }: ColorChartProps) {
  return (
    <section class="flex flex-wrap justify-center items-center gap-4">
      <For each={colors}>{(color) => <ColorBox color={color} />}</For>
    </section>
  );
}

export default ColorChart;
