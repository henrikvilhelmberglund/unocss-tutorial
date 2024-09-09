<script>
	const directions = ["left", "up", "right", "down"];
</script>

{#snippet arrowKey(classes)}
	<button class="{classes} h-18 w-18"></button>
{/snippet}

<div
	tabindex="0"
	role="button"
	onmousedown={(e) => {
		e.preventDefault();
	}}
	class="grid grid-areas-[._up._]-[left_._right]-[._down_.] justify-start">
	{#each directions as direction}
		{@render arrowKey(`i-carbon-arrow-${direction} grid-area-${direction}`)}
	{/each}
</div>
