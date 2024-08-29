import { definePreset } from "unocss";
import myButton from "./my-button";

export default definePreset((options) => {
	return {
		name: "my-preset",
		rules: [...myButton],
		theme: {
			animation: {
				keyframes: {
					wiggle: "{0%,100% {transform:rotate(-3deg)} 50% {transform:rotate(30deg)}}",
				},
				durations: {
					wiggle: "1s",
				},
				timingFns: {
					wiggle: "ease-in-out",
				},
				counts: {
					wiggle: "infinite",
				},
			},
		},
		layers: {
			"my-preset-layer": -1,
			components: -1,
			default: 1,
			utilities: 2,
		},
	};
});
