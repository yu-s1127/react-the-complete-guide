import React, { FC, HTMLAttributes } from 'react';

import classes from './Card.module.css';

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
