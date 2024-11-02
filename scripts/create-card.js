const imgPath = './assets/';
const downloadPath = baseUrl + '/download';
const imgSrc = {
	audio: 'mc-file-audio.svg',
	word: 'mc-file-document.svg',
	image: 'mc-file-image.svg',
	archive: 'mc-file-pack.svg',
	presentation: 'mc-file-presentation.svg',
	table: 'mc-file-spreadsheet.svg',
	unknown: 'mc-file-unknown.svg',
	video: 'mc-file-video.svg',
};

const getImgUrl = (prefix) => {
	switch (prefix) {
		case 'mp4':
		case 'mkv':
			return imgPath + imgSrc.video;
			break;
		case 'mp3':
		case 'flac':
		case 'wav':
			return imgPath + imgSrc.audio;
			break;
		case 'doc':
		case 'docx':
			return imgPath + imgSrc.word;
			break;
		case 'jpeg':
		case 'png':
		case 'jpg':
		case 'gif':
		case 'bmp':
			return imgPath + imgSrc.image;
			break;
		case 'zip':
		case 'rar':
		case '7z':
			return imgPath + imgSrc.archive;
			break;
		case 'pptx':
		case 'ppt':
			return imgPath + imgSrc.presentation;
			break;
		case 'xlsx':
			return imgPath + imgSrc.table;
			break;
		default:
			return imgPath + imgSrc.unknown;
			break;
	}
};

const createCard = (fileName, fileId) => {
	let div = document.createElement('div');
	let img = document.createElement('img');
	let span = document.createElement('span');
	let button = document.createElement('div');
	let buttonSpan = (document.createElement('span').innerText = 'Download');
	div.classList = 'card';
	span.classList = 'main-text-medium';
	button.classList = 'main-text-medium button';
	img.src = getImgUrl(fileName.split('.')[1]);

	if (fileName.length > 15) {
		span.title = fileName;
		fileName = fileName.slice(0, 12) + '...';
	}

	span.innerText = fileName;

	div.addEventListener('click', () => {
		window.open(`${downloadPath}/${fileId}`);
	});

	button.append(buttonSpan);
	div.append(img);
	div.append(span);
	div.append(button);
	return div;
};
