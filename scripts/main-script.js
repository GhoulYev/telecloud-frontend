let isSearch = false;

const main = async (path) => {
	const button = document.getElementById('button-text');
	let dots = '.';
	const anim = setInterval(() => {
		button.innerText = dots;
		if (dots.length < 3) {
			dots += '.';
		} else {
			dots = '.';
		}
	}, 200);
	getFiles(path).then((result) => {
		if (!result) {
			alert('Путь не найден!');
			clearInterval(anim);
			button.innerText = 'OK';
			isSearch = !isSearch;
			return;
		}
		clearInterval(anim);
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
	if (!isSearch) {
		isSearch = !isSearch;
		const path = document.getElementById('path-input').value;
		if (path) {
			main(path);
		}
	}
});

document.getElementById('path-input').addEventListener('keyup', (event) => {
	if (!isSearch) {
		if (event.code === 'Enter') {
			isSearch = !isSearch;

			const path = document.getElementById('path-input').value;
			if (path) {
				main(path);
			}
		}
	}
});
