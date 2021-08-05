import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    margin: 0,
  },
}));

const BlockUI = forwardRef((props, ref) => {

    const classes = useStyles();
    const messageDefault = props.hasOwnProperty('message') ? props.message : '';
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState(messageDefault);

    useImperativeHandle(ref, () => ({
      open: (visible, message = '') => {
        setVisible(visible);
        if (message !== '') {
          setMessage(message);
        }
      },
    }));

    let content;
    if (message !== '') {
      content = <div><div>{message}</div><CircularProgress color="inherit" /></div>;
    } else {
      content = <CircularProgress color="inherit" />;
    }

    return (
      <Backdrop className={classes.backdrop} open={visible}>
        {content}
      </Backdrop>
    );
});

export default BlockUI;
