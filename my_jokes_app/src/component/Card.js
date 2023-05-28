import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';
import './Like.css';

const LikeButton = ({ name, likes, onLike }) => {
  return (
    <button className="like-button" onClick={onLike}>
      <span>{name}</span>
      <span className={`like-count ${likes > 0 ? 'like-count-animate' : ''}`}>😁 {likes} likes</span>
    </button>
  );
};

const Card = () => {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/jokes')
      .then((response) => {
        const reversedJokes = response.data.reverse();
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch jokes:', error);
      });
  }, []);

  const handleFlip = (cardId) => {
    setJokes((prevJokes) =>
          prevJokes.map((joke) =>
          joke._id === cardId ? { ...joke, isFlipped: !joke.isFlipped } : joke
      )
    );
  };

  const handleLike = (event, cardId) => {
    event.stopPropagation();

    axios
      .post(`http://localhost:3001/api/jokes/${cardId}/like`)
      .then((response) => {
        // Update the likes count in the local state
        setJokes((prevJokes) =>
          prevJokes.map((joke) =>
            joke._id === cardId ? { ...joke, likes: response.data.likes } : joke
          )
        );
      })
      .catch((error) => {
        console.error('Failed to update like:', error);
      });
  };
  
  const handleCopyClick = (event, content, ans, cardId) => {
    event.stopPropagation();
    setJokes((prevJokes) =>
          prevJokes.map((joke) =>
          joke._id === cardId ? { ...joke, isInteractable: false } : joke
      )
    );
    const copyText = content + '\n\n' + ans; // Concatenate content and ans with line breaks
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        console.log('Copied to clipboard:', copyText);
        setJokes((prevJokes) =>
          prevJokes.map((joke) =>
            joke._id === cardId ? { ...joke, isCopied: true } : joke
          )
        );
        setTimeout(() => {
          setJokes((prevJokes) =>
            prevJokes.map((joke) =>
              joke._id === cardId ? { ...joke, isCopied: false } : joke
            )
          );
        }, 1500);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
    <div className="card-container">
      
      {jokes.map((joke) => (
        <div
          className={`card ${joke.isFlipped ? 'flipped' : ''}`}
          onClick={() => handleFlip(joke._id)}
          key={joke._id}
        >
          <LikeButton
            name={joke.nickname}
            likes={joke.likes}
            onLike={(event) => handleLike(event, joke._id)}
            className={joke.isLiked ? 'like-button-pulse' : ''}
          />
          <div className="card-actions">
            <button
              className={`copy-button ${joke.isCopied ? 'copied' : ''}`}
              onClick={(event) => handleCopyClick(event, joke.content, joke.ans, joke._id)}
            >
              {joke.isCopied ? 'Copied' : 'Copy'}
            </button>

            <div className="social-links">
              <a
                href="https://www.instagram.com/direct/inbox/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                InstaDM
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                FBook
              </a>
            </div>
          </div>

          <div className="card-inner">
            <div className="card-front">
              <h3>{joke.content}</h3>
            </div>
            <div className="card-back">
              <h3>{joke.ans}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
