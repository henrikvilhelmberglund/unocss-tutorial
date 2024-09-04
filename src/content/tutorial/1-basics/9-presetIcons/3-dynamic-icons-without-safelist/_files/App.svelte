<script>
	import { flags } from "./flags.js";
</script>

<main class="flex flex-wrap gap-1">
	{#each Object.entries(flags) as [countryCode, icon]}
		<div class="{icon} size-12"></div>
	{/each}
</main>
