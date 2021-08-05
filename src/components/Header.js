import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  PhoneIcon
} from "./shared/MaterialUI";
import logo from "../assets/images/logo.png";
import { HeaderStyle } from "../assets/css/header-style";

const Header = () => {

  const style = HeaderStyle();
  
  return (
    <>
      <Grid container spacing={3} className={style.header}>
        <Grid item xs={6}>
          <img src={logo} alt="Rimac" title="Rimac" className={style.header__logo}/>
        </Grid>
        <Grid item xs={6} className={style.header__wrapperPhone}>
          <span className={style.wrapperPhone__message}>¿Tienes alguna duda?</span>
          <span className={style.wrapperPhone__phoneLarge}><PhoneIcon className={style.wrapperPhone__phoneIcon} />
            <a href="tel:(01)4116001">(01)4116001</a>
          </span>
          <span className={style.wrapperPhone__phoneSmall}><PhoneIcon className={style.wrapperPhone__phoneIcon}/>
            <a href="tel:(01)4116001">Llámanos</a>
          </span>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);
