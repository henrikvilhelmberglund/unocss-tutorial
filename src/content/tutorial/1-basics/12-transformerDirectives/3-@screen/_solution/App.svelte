<div class="grid">
	<p>Text</p>
	<p>More text</p>
</div>

<style>
	.grid {
		--uno: grid grid-cols-2;
	}
	@screen md {
		.grid {
			--uno: grid-cols-1;
		}
	}
</style>