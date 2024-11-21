import React from 'react';
import { Link } from'react-router-dom';

const Stat = ({title, image, link}) => {
  return (
    <div className="flex flex-col items-center">
      <Link to={link}><img className="" alt={title} src={image} /></Link>
    </div>
  );
};

export default Stat;