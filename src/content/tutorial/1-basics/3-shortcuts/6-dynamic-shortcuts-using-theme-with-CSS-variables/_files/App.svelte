<script>
	let hueNumber = $state(0);
</script>

<div style="--hue: {hueNumber}">
	<button onclick={() => (hueNumber = 70)} class="fancy-button-random">Make me orange</button>

	<button onclick={() => (hueNumber = 150)} class="fancy-button-random">Make me green</button>

	<button onclick={() => (hueNumber = 200)} class="fancy-button-random">Make me blue</button>
</div>
