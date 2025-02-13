<script>
	import LoginScreen from '$lib/screens/LoginScreen.svelte';
	import { onMount, getContext } from 'svelte';

	const redirect = getContext('redirect');
	const provider = getContext('provider');
	const trainer = getContext('trainer');
	const lastSync = getContext('lastSync');

	onMount(async () => {
		if ($trainer) {
			redirect('/member_card');
		}
	});

	const onSubmit = async (id) => {
		let result = await provider.getTrainer.handle(id);
		$trainer = result;
		$lastSync = new Date();
		redirect('/member_card');
	};
</script>

<LoginScreen {onSubmit} />
