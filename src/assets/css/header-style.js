import { makeStyles } from '@material-ui/core/styles';

export const HeaderStyle = makeStyles(() => ({

    header:{
        paddingTop: '25px !important',
        textAlign: 'center'
    },
    header__logo:{
        '@media (min-width: 1025px)': {
            height: '40px'
        },
        '@media (min-width: 320px) and (max-width: 480px)': {
            height: '40px'
        },
    },
    wrapperPhone__phoneIcon:{
        '@media (min-width: 1025px)': {
            fontSize: '17px',
            marginRight: '7px'
        },
        '@media (min-width: 320px) and (max-width: 480px)': {

        },
    },
    wrapperPhone__phoneSmall:{
        color: '#6F7DFF',
        '@media (min-width: 1025px)': {
            display: 'none'
        },
        '@media (min-width: 320px) and (max-width: 480px)': {
            display: 'inline'
        },
    },
    wrapperPhone__phoneLarge:{
        color: '#6F7DFF',
        '@media (min-width: 1025px)': {
            display: 'inline'
        },
        '@media (min-width: 320px) and (max-width: 480px)': {
            display: 'none'
        },
    },
    wrapperPhone__message:{
        paddingRight: '29px',
        '@media (min-width: 1025px)': {
            display: 'inline'
        },
        '@media (min-width: 320px) and (max-width: 480px)': {
            display: 'none'
        },
    }
}));
