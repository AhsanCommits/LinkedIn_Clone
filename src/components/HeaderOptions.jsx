import React from 'react';
import '../assets/styles/Header.css';

const HeaderOptions = ({ title, Icon, Avatar, Signout }) => {
  return (
    <>
      <div className="HeaderItem">
        {Icon && <Icon />}
        {title && <div>{title}</div>}
        {Avatar && <img src={Avatar} alt="avatar" onClick={Signout} />}
      </div>
    </>
  );
};

export default HeaderOptions;
