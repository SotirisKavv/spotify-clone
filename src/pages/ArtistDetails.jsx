/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCoreV2';

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id: artistId } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) {
    return <Loader title="Searching Song Details..." />;
  }
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      {artistData?.data[0]?.attributes.artistBio && (
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold">Bio</h2>
          <div className="text-white text-lg">
            <p className="text-gray-45 text-base my-1">
              {artistData?.data[0]?.attributes.artistBio}
            </p>
          </div>
        </div>
      )}
      <RelatedSongs
        data={Object.values(
          artistData?.data[0].views['top-songs']?.data.map(
            (song) => song.attributes
          )
        )}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
