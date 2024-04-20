export const getfrase = async () => {
	try {
		const datafrase = await fetch(`https://catfact.ninja/fact`).then((res) => res.json());
		console.log(datafrase);
		return datafrase.fact;
	} catch (error) {
		console.log('error', error);
		return error;
	}
}