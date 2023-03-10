/* eslint-disable operator-linebreak */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongRelatedQuery,
  useGetSongDetailsQuery,
} from '../redux/services/shazamCoreV1';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  const {
    data: related,
    error,
    isFetching: isFetchingSongRelated,
  } = useGetSongRelatedQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, related, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingSongRelated) {
    return <Loader title="Searching Song Details..." />;
  }
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="text-white text-lg">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-45 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-45 text-base my-1">
              Sorry, no lyrics where found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={related}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
