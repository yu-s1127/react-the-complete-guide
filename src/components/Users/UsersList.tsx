import React, { FC } from 'react';
import User from '../../types/User';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

interface Props {
  users: Array<User>;
}
const UsersList: FC<Props> = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
