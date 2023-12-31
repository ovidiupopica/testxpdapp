import React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';

export const Home = () => {
  return (
    <section className='home'>
      <div className='home-flex'>
        <h2 className='home-title'>Welcome to the NFT Ownership Verifier</h2>
        <p className='home-description'>
          Quickly and easily verify user ownership of authentic NFTs from any
          collection.
        </p>
        <div className='home-links'>
          <Link to={routeNames.build}>
            <button className='btn btn-primary'>Build URL</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
