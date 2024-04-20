export const getText = async (text: string) => {
	try {
		const dataText = await fetch(`https://cataas.com/cat/says/${text}`).then((res) => res.json());
		console.log(dataText);
		return dataText;
	} catch (error) {
		console.log('error', error);
		return error;
	}
}