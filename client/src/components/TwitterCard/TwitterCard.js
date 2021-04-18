import React from 'react';
import './TwitterCard.css';

export default function TwitterCards({ tweets }) {
  console.log('This is the TwitterCards console', tweets);
  return tweets.map((tweet, i) => <TwitterCard key={i} tweet={tweet} />);
}

function TwitterCard({ tweet }) {
  // Add in a header (like "Artist Spotlight") for the tweet cards section
  return (
    <div className="row">
      <div className="col s12">
        <div className="card" id='twitter-card-color'>
          <div className="card-content">
            <span className="card-title" id='twitter-card-title'>
              @{tweet.screen_name}
            </span>
            <span className="card-title" id='twitter-card-text'>{tweet.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
