/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import SongBarTrack from './SongBarTrack';
import SongBarArtist from './SongBarArtist';

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    <div className="font-bold text-3xl text-white">
      {artistId ? 'Top Songs' : 'Related Songs'}
    </div>
    <div className="mt-6 w-full flex flex-col">
      {artistId
        ? data?.map((song, i) => (
            <SongBarArtist
              key={`${artistId}-${i}`}
              i={i}
              song={song}
              activeSong={activeSong}
            />
          ))
        : data?.map((song, i) => (
            <SongBarTrack
              key={`${song.key}-${i}`}
              i={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))}
    </div>
  </div>
);

export default RelatedSongs;
