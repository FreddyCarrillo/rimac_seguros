import { makeStyles } from '@material-ui/core/styles';

export const PlanStyles = makeStyles(() => ({
    plan:{
        minWidth: '100%',
        padding: '0px',
        overflowX: 'hidden'
    },
    wrapperPlan:{
        textAlign: 'center',
        paddingTop: '40px',
        minHeight: `${window.innerHeight - 57}px`,
    },
    wrapperPlan__timeLine:{
        backgroundColor: '#F7F8FC',
        textAlign: 'center'
    },
    wrapperPlan__info:{
        fontSize: '14px',
        textAlign: 'justify',
        paddingTop: '18px'
    },
    wrapperPlan__iconTwo:{
        backgroundColor: '#6F7DFF'
    },
    wrapperPlan__info_gray:{
        color: 'gray'
    },
    wrapperPlan__info_selected:{
        color: '#494F66'
    },
    wrapperCentro:{
        padding: '36px 65px',
        textAlign: 'justify',
        color: '#A3ABCC'
    },
    wrapperCentro__iconBack:{
        fontSize: '15px',
        paddingLeft: '3px',
        color: 'red',
    },
    wrapperCentro__iconSuma:{
        fontSize: '19px',
        paddingLeft: '3px',
        color: '#a736df',
    },
    wrapperCentro__buttonIcon:{
        border: '1px solid red',
        width: '7px',
        height: '7px',
        marginRight: '17px'
    },
    wrapperCentro__messageBack:{
        fontSize: '13px'
    },
    wrapperCentro__name:{
        fontSize: '40px',
        paddingTop: '22px',
        paddingBottom: '13px'
    },
    wrapperCentro__infoVehiculo:{
        border: '1px solid #b9babe',
        borderRadius: '9px',
        marginTop: '46px',
        height: '130px'
    },
    wrapperCentro__infoVehiculo_placa:{
        fontSize: '12px',
        color: '#A3ABCC'
    },
    wrapperCentro__infoVehiculo_marca:{
        color: '#494F66',
        fontSize: '17px',
        textAlign: 'left',
        marginTop: '12px'
    },
    wrapperCentro__logo:{
        width: '116px',
        marginTop: '-47px'
    },
    wrapperCentro__wrapperInfo:{
        paddingTop: '24px',
        paddingLeft: '30px'
    },
    wrapperCentro__wrapperLogo:{
        paddingLeft: '33px'
    },
    wrapperCentro__wrapperSumaAsegurada:{
        marginTop: '42px'
    },
    wrapperSumaAsegurada__info:{
        fontSize: '14px',
        color: '494F66'
    },
    wrapperSumaAsegurada__infoPrecio:{
        fontSize: '11px',
        letterSpacing:'1.2px',
        marginTop: '7px',
        color: '#676F8F'
    },
    wrapperSumaAsegurada__bloque:{
        border: '1px solid',
        height: '39px',
        borderRadius: '9px',
        textAlign: 'center',
        lineHeight: '34px'
    },
    wrapperCentro__buttonSuma:{
        padding: '0px'
    },
    wrapperCentro__divider:{
        marginTop: '38px',
        marginBottom: '44px'
    },
    wrapperCentro__tab:{
        minWidth: '100px !important',
        maxWidth: '100px !important',
        fontSize: '10px',
        margin: '7px 9px'
    },
    wrapperCentro__treeView:{
        marginTop: '30px'
    },
    treeView__title:{
        color: '#494F66',
        fontSize: '14px',
        marginBottom: '12px'
    },
    treeView__iconButton: {
        fontSize: '15px',
        color: '#6F7DFF',
    },
    treeView__button: {
        border: '1px solid #6F7DFF',
        width: '7px',
        height: '7px',
        marginRight: '17px'
    },
    treeView__messageButton: {
        fontSize: '13px',
        color: '#6F7DFF'
    },
    treeView__info:{
        fontSize: '13px',
        lineHeight: '24px',
        marginTop: '14px',
        display: 'none'
    },
    wrapperCentro__dividerGray: {
        marginTop: '38px',
        marginBottom: '44px',
        color: 'gray'
    },
}));
