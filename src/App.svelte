<script>
	import List from './list.svelte';
	export let name;
	export let associations;
	export let tools;
	export let expectations;
	export let hobbies;
</script>

<main>
	<h1>Hello, my name is {name}!</h1>

	<h2>I associate with CI/CD:</h2>
	<List content={associations}></List>

	<h2>In my project we use:</h2>
	<List content={tools}></List>

	<h2>I want to learn today:</h2>
	<List content={expectations}></List>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0563A5;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #A1A6AE;
		font-size: 2em;
		font-weight: 200;

		margin-top: 1em;
		margin-bottom: 0.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>