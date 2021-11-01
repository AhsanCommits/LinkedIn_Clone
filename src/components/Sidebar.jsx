import { Avatar } from '@mui/material';
import React from 'react';
import '../assets/styles/Sidebar.css';
import Background from '../assets/Images/AhsanRaza.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
const Sidebar = () => {
  const user = useSelector(selectUser);
  const RecentItems = ({ title }) => {
    return (
      <div>
        <p className="hastags"># {title}</p>
      </div>
    );
  };
  return (
    <div className="sidebarLeft_Main">
      <div className="sidebarLeft">
        <img src={Background} alt="backgroundImage" />
        <div className="avatarContainer">
          {user.FullName !== undefined && user.ProfileURL !== undefined ? (
            <Avatar
              src={user.ProfileURL}
              style={{ width: '90px', height: '90px' }}
            >
              {user.FullName[0]}
            </Avatar>
          ) : null}
        </div>
        <div className="info" style={{ borderBottom: '0.1px solid #dfdedb' }}>
          <h4>{user.FullName}</h4>
          <p>{user.Email}</p>
        </div>
        <div className="sidebarLeft_stats first">
          <p className="display_stats">Who viewed your profile</p>
          <p className="number_stats">59</p>
        </div>
        <div className="sidebarLeft_stats second">
          <p className="display_stats">Views of your post</p>
          <p className="number_stats">107</p>
        </div>
      </div>
      <div className="sidebarLeft_Recent">
        <h4>Recent</h4>
        <RecentItems title="LI Service Provider Group" />
        <RecentItems title="Masterclass: Translate user stories" />
        <RecentItems title="Jobs in Europe" />
        <RecentItems title="Front End Developer Group" />
      </div>
    </div>
  );
};

export default Sidebar;
