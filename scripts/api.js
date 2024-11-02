const baseUrl = 'http://localhost:3000/';

const getFiles = async (path) => {
	const Head = new Headers();
	Head.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		path,
	});

	const requestOptions = {
		method: 'POST',
		headers: Head,
		body: raw,
		redirect: 'follow',
	};

	let result = await fetch(baseUrl + 'getfiles/', requestOptions);
	result = await result.json();
	return result.files;
};
