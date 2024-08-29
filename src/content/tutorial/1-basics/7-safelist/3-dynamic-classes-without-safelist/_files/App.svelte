<script>
	const classes = {
		red: "bg-red-500 hover:bg-red-600",
		blue: "bg-blue-500 hover:bg-blue-600",
		green: "bg-green-500 hover:bg-green-600 outline outline-green-400",
	};
</script>

{#each Object.entries(classes) as [color, dynamicClasses]}
	<button class="{dynamicClasses} px-6 py-3 rounded-lg">{color}</button>
{/each}
