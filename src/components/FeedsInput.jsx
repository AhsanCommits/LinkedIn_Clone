import React, { useState } from 'react';
import { db } from '../server/firestore';
import { Avatar } from '@mui/material';
import '../assets/styles/Feeds.css';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FeedsInputOptions from './FeedsInputOptions';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
const FeedsInput = () => {
  const user = useSelector(selectUser);
  const [EnteredPost, setEnteredPost] = useState('');

  const InputChangehandler = (event) => {
    setEnteredPost(event.target.value);
  };
  const CreatePosthandler = (e) => {
    e.preventDefault();
    db.collection('posts')
      .add({
        Name: user.FullName,
        Description: user.Email,
        Message: EnteredPost,
        Avatar: user.ProfileURL !== '' ? user.ProfileURL : '',
        publishedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch(() =>
        alert('OOPS! There was an error storing the data on the database.')
      );
    setEnteredPost('');
  };

  return (
    <div className="feedsInput_container">
      <div className="feedsInput_writePost">
        <Avatar />
        <form>
          <div className="feedsInput_textContainer">
            <input
              type="text"
              className="textInput"
              placeholder="Start a post"
              value={EnteredPost}
              onChange={InputChangehandler}
            />
          </div>
          <input
            type="submit"
            onClick={CreatePosthandler}
            style={{ display: 'none' }}
          />
        </form>
      </div>
      <div className="InputOptionsContainer">
        <FeedsInputOptions title="Photo" Icon={PhotoIcon} color="#70B5F9" />
        <FeedsInputOptions title="Video" Icon={YouTubeIcon} color="#E7A33E" />
        <FeedsInputOptions
          title="Event"
          Icon={EventAvailableIcon}
          color="#7FC15E"
        />
        <FeedsInputOptions
          title="Write Article"
          Icon={AssignmentIcon}
          color="#FC9295"
        />
      </div>
    </div>
  );
};

export default FeedsInput;
