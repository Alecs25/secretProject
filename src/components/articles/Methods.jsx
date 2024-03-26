export const fetchPosts = async () => {
	try {
		const response = await fetch("http://localhost:3000/articles");
		const data = await response.json();

		// console.log(response);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error.message);
	}
};
