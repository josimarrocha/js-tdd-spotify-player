export default function renderAlbumInfo(data, element) {
  const markup = `
  <img class="album-image" src="${data.images[0].url}" alt="${data.name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Músicas</p>
    <audio class="audio" controls style="display: none"></audio>
  `;
  // eslint-disable-next-line no-param-reassign
  element.innerHTML = markup;
  return data;
}
