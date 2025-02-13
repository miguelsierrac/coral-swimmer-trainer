<script>
	import MemberCardScreen from '$lib/screens/MemberCardScreen.svelte';
	import { onMount, onDestroy, getContext } from 'svelte';

	const provider = getContext('provider');
	const redirect = getContext('redirect');
	const trainer = getContext('trainer');
	const lastSync = getContext('lastSync');
	const token = getContext('token');

	const onLogOut = () => {
		$trainer = null;
		$lastSync = null;
	};

	function addHours(date, hours) {
		console.log(date)
		const hoursToAdd = hours * 60 * 60 * 1000;
		date.setTime(date.getTime() + hoursToAdd);
		console.log(date)
		return date;
	}

	onMount(async () => {
		let now = new Date();
		console.log(now)
		if ($trainer) {
			try {
				$trainer = await provider.getTrainer.handle($trainer.identification);
				if ($token && $trainer.token !== $token) {
					$trainer.token = $token;
					await provider.saveToken.handle($trainer);
				}
				$lastSync = new Date();
			} catch (error) {
				console.log(error);
			}
		}
	});

	$: {
		if (!$trainer) {
			redirect('/');
		}
	}
</script>

<MemberCardScreen bind:trainer={$trainer} {onLogOut} />
