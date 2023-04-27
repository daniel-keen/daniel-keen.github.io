<script>
	function supportsEmoji() {
		const ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = ctx.canvas.height = 1;
		ctx.fillText('😗', -4, 4);
		return ctx.getImageData(0, 0, 1, 1).data[3] > 0; // Not a transparent pixel
	}
</script>

<h1 id="greet">
	Hello {#if supportsEmoji()}&#127757;{:else}World{/if}!
</h1>
<h3>
	<p style=" margin-left: 10pt"><a href="games">Games</a></p>
	<p style=" margin-left: 10pt"><a href="contacts">Contact me</a></p>
</h3>
