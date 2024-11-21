import React from 'react';

const Header = ({title, subtitle, firstname, lastname, image}) => {
  return (
    <div className="flex flex-row justify-between">
        <div>
            <h1 className="text-3xl mb-2">{title}</h1>
            <p className="text-greymed">{subtitle}</p>
        </div>
        <div className="flex flex-row items-center">
            <img src={image} alt={firstname + " " + lastname} className="rounded-full h-16 w-16 shadow-custom" />
            <p className="ml-4 text-greymed text-sm">{firstname + " " + lastname}</p>
        </div>
    </div>
  );
};

export default Header;