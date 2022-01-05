import React, { ChangeEvent, FC, FormEvent, useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Error from '../../types/Error';
import Wrapper from '../Helpers/Wrapper';

interface Props {
  onAddUser: (uName: string, uAge: string) => void;
}

const AddUser: FC<Props> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Error | null>(null);

  const addUserhandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;

    if (enteredName?.trim().length === 0 || enteredAge?.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (enteredAge && parseInt(enteredAge) < 1) {
      setError({
        title: 'invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredName!, enteredAge!);

    if (nameInputRef.current !== null) nameInputRef.current.value = '';
    if (ageInputRef.current !== null) ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="username">Age (Years)</label>
          <input id="username" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
