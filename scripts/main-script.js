const main = async (path) => {
	getFiles(path).then((result) => {
		if (!result) {
			alert('Путь не найден!');
			return;
		}
		document.getElementsByClassName('modal')[0].style.display = 'none';
		result.forEach((file) => {
			document
				.getElementsByClassName('cards')
				.item(0)
				.append(createCard(file.fileName, file.id));
		});
	});
};

document.getElementById('begin').addEventListener('click', () => {
	const path = document.getElementById('path-input').value;
	if (path) {
		main(path);
	}
});

document.getElementById('path-input').addEventListener('keyup', (event) => {
	if (event.code === 'Enter') {
		const path = document.getElementById('path-input').value;
		if (path) {
			main(path);
		}
	}
});
