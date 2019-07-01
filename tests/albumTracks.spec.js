import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTacks from '../src/albumTracks';
import convertHumanTime from '../src/convertToHumanTime';

describe('AlbumTracks', () => {
  it('should exist', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(renderAlbumTacks).to.exist;
  });
  const data = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];
  const data2 = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
    {
      preview_url: 'https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Around The World',
      duration_ms: 238733,
    },
  ];

  const markup = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertHumanTime(238733)}</p>
  </div>`;
  const markup2 = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertHumanTime(238733)}</p>
  </div>
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4">
    <p class="music-number">1</p>
    <p class="music-title">Around The World</p>
    <p class="music-duration">${convertHumanTime(238733)}</p>
  </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');

    renderAlbumTacks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append when more than 1 track', () => {
    const element = document.createElement('div');

    renderAlbumTacks(data2, element);
    expect(element.innerHTML).to.be.eql(markup2);
  });
});

