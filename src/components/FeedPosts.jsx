import React, { forwardRef } from 'react';
import { Avatar } from '@mui/material';
import '../assets/styles/Feeds.css';
import FeedsInputOptions from './FeedsInputOptions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
const FeedPosts = forwardRef(
  ({ AvatarURL, Description, Message, Name }, ref) => {
    return (
      <div ref={ref} className="feedPostContainer">
        <div className="feedPostHeader">
          {AvatarURL === '' ? <Avatar /> : <Avatar src={AvatarURL} />}
          <div className="feedPostHeading">
            <h5>{Name}</h5>
            <p>{Description}</p>
          </div>
        </div>
        <p>{Message}</p>
        <div className="InputOptionsContainer">
          <FeedsInputOptions
            title="Like"
            Icon={ThumbUpAltIcon}
            color="#A9A9A9"
          />
          <FeedsInputOptions
            title="Comment"
            Icon={CommentIcon}
            color="#A9A9A9"
          />
          <FeedsInputOptions title="Share" Icon={ShareIcon} color="#A9A9A9" />
          <FeedsInputOptions title="Send" Icon={SendIcon} color="#A9A9A9" />
        </div>
      </div>
    );
  }
);

export default FeedPosts;
