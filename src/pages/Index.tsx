import { createSignal, onMount } from "solid-js";
import type { Color } from "./types";
import ColorChart from "../components/ColorChart";

export default function Index() {
  const [colors, setColors] = createSignal<Color[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/colors");
      console.log(response, "<- response");
      const allColors = (await response.json()) as Color[];
      setColors(allColors);
      console.log("Fetched colors:", allColors);
    } catch (error) {
      console.error("Failed to fetch dinosaurs:", error);
    }
  });

  return (
    <main>
      <h1>Isaac&apos;s Color Chart</h1>
      <ColorChart colors={colors()} />
      <h2>Yes, I did name these myself</h2>
    </main>
  );
}
