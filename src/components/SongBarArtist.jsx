/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';

const SongBarArtist = ({ song, i, activeSong }) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.name ? 'bg-[#4c426e]' : 'bg-transparent'
    } py-2 p-4 rounded-lg mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.artwork?.url.replace('{w}', '125').replace('{h}', '125')}
        alt={song?.name}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {/* <Link to={`/songs/${song?.playParams?.id}`}> */}
        <p className="text-xl font-bold text-white">{song?.name}</p>
        {/* </Link> */}

        <p className="text-base text-gray-300 mt-1">{song?.albumName}</p>
      </div>
    </div>
  </div>
);

export default SongBarArtist;
