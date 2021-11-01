import React from 'react';
import LinkedInImage from '../assets/Images/linkedin.png';
import '../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '../assets/Images/Avatar.png';
import { auth } from '../server/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const SignOutHandler = () => {
    auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedInImage} alt="LinkedIn Logo"></img>
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Jobs" />
        <HeaderOptions Icon={MessageIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions
          Avatar={user.ProfileURL == null ? Avatar : user.ProfileURL}
          Signout={SignOutHandler}
        />
      </div>
    </div>
  );
};
export default Header;
