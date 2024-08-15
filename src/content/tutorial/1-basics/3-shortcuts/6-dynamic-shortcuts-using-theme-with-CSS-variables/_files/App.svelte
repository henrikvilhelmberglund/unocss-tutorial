<script>
	let hueNumber = $state(0);
</script>

<div style="--hue: {hueNumber}">
	<button onclick={() => (hueNumber = 70)} class="fancy-button-random">Click me! (orange)</button>

	<button onclick={() => (hueNumber = 150)} class="fancy-button-random">Click me! (green)</button>

	<button onclick={() => (hueNumber = 200)} class="fancy-button-random">Click me! (blue)</button>
</div>
