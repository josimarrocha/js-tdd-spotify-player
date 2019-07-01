import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('should to be an object', () => {
    expect(spotify).to.be.an('object');
  });

  it('should have search method', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(spotify.search).to.exist;
  });

  it('should have album method', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(spotify.album).to.exist;
  });
});
