import spotify from './Spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const $listAlbums = document.querySelector('#album-list');
const $albumInfo = document.querySelector('.album-info');
const $albumTracks = document.querySelector('#album-tracks');
const $Form = document.querySelector('.form-wrapper');

function handlePlayAudio() {
  const tracks = document.querySelectorAll('.music');
  tracks.forEach((track) => {
    track.addEventListener('click', () => {
      const $audio = document.querySelector('.audio');
      const previewUrl = track.getAttribute('data-track-preview');
      $audio.style.display = 'block';
      $audio.setAttribute('src', previewUrl);
    });
  });
}

async function infoAlbums() {
  const id = this.getAttribute('data-id');
  await spotify.album.getAlbum(id)
    .then(data => renderAlbumInfo(data, $albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, $albumTracks));
  handlePlayAudio();
}

function handleAlbumsItems() {
  const $listAlbumsItems = document.querySelectorAll('.list-item');
  $listAlbumsItems.forEach(item => item.addEventListener('click', infoAlbums));
}

$Form.addEventListener('submit', (e) => {
  e.preventDefault();
  const albums = spotify.search.albums(e.target.query.value);
  albums.then((data) => {
    renderAlbums(data.albums.items, $listAlbums);
    handleAlbumsItems();
  });
});
