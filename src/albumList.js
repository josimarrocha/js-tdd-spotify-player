const createMarkup = data => data.map(album => `
    <div class="list-item" data-id="${album.id}">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${album.name}</p>
        <p class="list-subtitle">${album.artists[0].name}</p>
      </div>
    </div>`,
).join('');

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);
  // eslint-disable-next-line no-param-reassign
  element.innerHTML = markup;
}
