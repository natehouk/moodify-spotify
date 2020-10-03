export const matchFilter = (song, playlistMinMax) => {
  if (
    song.audio.danceability * 100  <= playlistMinMax.data.danceability[1] &&
    song.audio.danceability  * 100  >= playlistMinMax.data.danceability[0] &&

    song.audio.energy * 100 <= playlistMinMax.data.energy[1] &&
    song.audio.energy * 100 >= playlistMinMax.data.energy[0] &&

    song.audio.instrumentalness * 100 <= playlistMinMax.data.instrumentalness[1] &&
    song.audio.instrumentalness * 100 >= playlistMinMax.data.instrumentalness[0] &&

    song.audio.loudness <= playlistMinMax.data.loudness[1] &&
    song.audio.loudness  >= playlistMinMax.data.loudness[0] &&

    song.audio.tempo <= playlistMinMax.data.tempo[1] &&
    song.audio.tempo  >= playlistMinMax.data.tempo[0] &&

    song.audio.valence * 100 <= playlistMinMax.data.valence[1] &&
    song.audio.valence * 100 >= playlistMinMax.data.valence[0] 
  ) {
    return true;
  }
  return false;
};

export function filterTracks(userTracks, playlistMinMax, trackId=null) {
  let filteredTracks;
  const songs = new Set();
  
  if (playlistMinMax.data.tempo) {
    filteredTracks = userTracks.songs
      .map(song => {
        if (!songs.has(song.id)) {
          songs.add(song.id);
          return song;
        }
      })
    console.log(filteredTracks);
      // .filter(song => {
      //   return matchFilter(song, playlistMinMax) 
      //     && song.id !== trackId
      // });
  }
  return filteredTracks;
}