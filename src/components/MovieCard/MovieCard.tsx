import React from 'react';
import './MovieCard.scss';
import { Card } from '../../types/Card';

type Props = {
  movie: Card,
};

export const MovieCard: React.FC<Props> = ({ movie }) => (
  <>
    <div className="card" data-cy="card" key={movie.imdbId}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            // eslint-disable-next-line max-len
            src={movie.imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{movie.title}</p>
          </div>
        </div>

        <div className="content">
          {movie.description}
          <br />
          <a href={movie.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);