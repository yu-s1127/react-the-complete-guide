import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

interface Props {
  title: string;
  message: string;
  onConfirm: () => void;
}

const BackDrop: FC<Pick<Props, 'onConfirm'>> = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: FC<Props> = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal: FC<Props> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          onConfirm={props.onConfirm}
          message={props.message}
        />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default ErrorModal;
