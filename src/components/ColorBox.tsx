import { Color } from "../types";
import { children } from "solid-js";

export default function ColorBox({ color }: { color: Color }) {
  console.log(color, "<- color in ColorBox");

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }

  return (
    <div class="flex flex-col gap-2">
      <div class="w-40 p-1 text-center text-white bg-black border-2 border-white rounded-t-2xl">
        {color.name}
      </div>
      <div class="w-40 h-24">
        <button
          type="button"
          aria-label={`Copy ${color.name}, ${color.id} to clipboard`}
          class="w-full h-full rounded-b-2xl"
          style={{
            "background-color": color.id,
          }}
          onClick={() => copyToClipboard(color.id)}
        />
      </div>
    </div>
  );
}
