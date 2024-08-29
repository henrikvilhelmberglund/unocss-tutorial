<script>
  import { colors } from "./colors.js"
</script>

{#each colors as color}
  <button class="bg-{color}-500 hover:bg-{color}-600 px-6 py-3 rounded-lg">{color}</button>
{/each}