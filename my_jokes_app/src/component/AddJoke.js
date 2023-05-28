import React, { useState } from 'react';
import axios from 'axios';
import './AddJoke.css';

const AddJoke = () => {
  const [showForm, setShowForm] = useState(false);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [ans, setAns] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAnsChange = (event) => {
    setAns(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if any of the fields are empty
    if (!nickname || !content || !ans) {
        alert('Please fill in all the fields');
        return;
    }
  
    const newJoke = {
      nickname,
      content,
      ans,
    };
  
    axios
      .post('http://localhost:3001/api/jokes', newJoke)
      .then((response) => {
        console.log('Joke created:', response.data);
        // Clear form fields and show "Submitted" message
        setNickname('');
        setContent('');
        setAns('');
        setSubmitted(true);
  
        // Refresh the website
        window.location.reload();
      })
      .catch((error) => {
        console.error('Failed to create joke:', error);
      });
  };

  return (
    <div className="add-joke-container">
      {showForm ? (
        <form className="joke-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <textarea placeholder="Answer" value={ans} onChange={handleAnsChange}></textarea>
          {submitted ? (
            <p className="submitted-message">Joke submitted!</p>
          ) : (
            <button className="submit-button" type="submit">
              Submit
            </button>
          )}
        </form>
      ) : (
        <button className="add-joke-button" onClick={toggleForm}>
          Share your sense of humor :)
        </button>
      )}
    </div>
  );
};

export default AddJoke;
