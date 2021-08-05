import { makeStyles } from '@material-ui/core/styles';

import logo from "../images/fondoseguro.jpg";

export const LoginStyles = makeStyles(() => ({
  wrapperLogin:{
    minWidth: '100%',
    padding: '0px',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  wrapperIzquierdo:{
    backgroundColor: 'yellow',
    minHeight: `${window.innerHeight-57}px`,
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    textAlign: 'center',
    '@media (min-width: 320px) and (max-width: 480px)': {
      minHeight: '40vh',
    },
  },
  wrapperIzquierdo__logoAuto:{
    paddingTop: '120px',
    paddingBottom: '50px',
    '@media (min-width: 1025px)': {
      width: '420px'
    },
    '@media (min-width: 320px) and (max-width: 480px)': {
      width: '120px'
    },
  },
  wrapperMessageIzquierdo:{
    textAlign: 'justify',
    marginLeft: '140px',
  },
  wrapperMessageIzquierdo__h1:{
    fontSize: '32px',
    marginBottom: '12px'
  },
  wrapperMessageIzquierdo__h1Red:{
    color: '#b10f0f'
  },
  wrapperMessageIzquierdo__messageSmall:{
    fontSize: '12px'
  },
  wrapperMessageIzquierdo__messageFooter:{
    fontSize: '12px',
    position: 'absolute',
    bottom: '0',
    height: '60px',
  },
  wrapperFormRigth:{
    width: '288px',
    margin: '156px auto'
  },
  wrapperFormRigth__btnSubmit:{
    marginTop: '10px',
    backgroundColor: 'red',
    color: 'white',
    height: '52px',
    '&:hover':{
      backgroundColor: '#a20a0a',
    }
  },
  wrapperFormRigth__info:{
    fontSize: '19px',
  },
  wrapperFormRigth__link:{
    fontSize: '12px',
    marginTop: '12px',
    fontWeight: '100'
  },
  link__span:{
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));
