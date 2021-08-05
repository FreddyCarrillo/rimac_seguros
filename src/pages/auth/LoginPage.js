import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Container,
  Grid,
  Button,
  TextField,
  InputAdornment,
  AccountBoxIcon,
  Box,
  FormControlLabel,
  Checkbox,
  withStyles
} from "../../components/shared/MaterialUI";

import { connect } from "react-redux";
import store from "../../redux/store";
import { useHistory } from "react-router-dom";
import { useUI } from "../../app/context/ui";
import { LoginStyles } from "../../assets/css/login-style";
import Header from "../../components/Header";
import logo from "../../assets/images/auto.png";
import UserService from "../../services/UserService";
import { addUser } from "../../redux/actions/user";

const LoginPage = (props) => {

  const style = LoginStyles();
  const { blockUI } = useUI();
  const state = store.getState();
  const history = useHistory();
  const accessToken = state.user.id;

  if (accessToken) {
    history.push("/plan");
  }

  const GreenCheckbox = withStyles({
    root: {
      color: 'green',
      '&$checked': {
        color: 'green',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const LoginSchema = Yup.object().shape({
    dni: Yup
      .string()
      .typeError('Ingrese solo números')
      .min(8, "Mínimo 8 caracteres")
      .max(8, 'Máximo 8 caracteres')
      .required("DNI es obligatorio")
      .test(
        (value)=>{
          return (value?.match(/^[0-9]+$/)) ? true : false
        }
      ),
    celular: Yup
      .string()
      .typeError('Ingrese solo números')
      .min(9, "Mínimo 9 caracteres")
      .max(9, "Máximo 9 caracteres")
      .required("Celular es obligatorio")
      .test(
        (value) => {
          return (value?.match(/^[0-9]+$/)) ? true : false
        }
      ),
    placa: Yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .max(7, "Máximo 6 caracteres")
      .required("Licencia es obligatorio"),
    terms: Yup
      .mixed()
      .required("Términos y condiciones es obligatorio")
      .test(
        (value) => {
          return (value) ? true : false;
        }
      )
  });

  const userService = new UserService();
  const onSubmit = async (values) => {
    try {
      blockUI.current.open(true);
      let { data: user } = await userService.read(parseInt(Math.random() * (5 - 1) + 1));
      let newUser = {
        id: user.id,
        name: user.name,
        username: user.username,
        phone: values.celular,
        placa: values.placa,
        auto: {
          marca: 'Audi',
          anio: 2021,
          modelo: 'Q7'
        }
      }
      let payload = { ...newUser, accessToken };
      props.dispatch(addUser(payload));
      blockUI.current.open(false);
      history.push("/plan");
    } catch (e) {
      blockUI.current.open(false);
    }
  };


  return (
    <Container component="main" maxWidth="lg" className={style.wrapperLogin}>
      <Header />
      <Grid container spacing={3} >
        <Grid item lg={6} xs={12} className={style.wrapperIzquierdo}>
          <Grid item lg={12} xs={6}>
            <img src={logo} alt="Auto" title="Auto" className={style.wrapperIzquierdo__logoAuto} />
          </Grid>
          <Grid item lg={12} xs={6}>
            <div className={style.wrapperMessageIzquierdo}>
              <div style={{ fontSize: '19px', marginBottom: '12px' }}>
                ¡Nuevo!
              </div>
              <div className={style.wrapperMessageIzquierdo__h1}>
                Seguro <span className={style.wrapperMessageIzquierdo__h1Red}>Vehicular<br />Tracking</span>
              </div>
              <div className={style.wrapperMessageIzquierdo__messageSmall}>
                Cuentanos donde le harás seguimiento a tu seguro
              </div>
              <div className={style.wrapperMessageIzquierdo__messageFooter}>
                &copy; 2021 RIMAC Seguros y Reaseguros
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Formik
            initialValues={{
              dni: '',
              celular: '',
              placa: '',
              terms: false
            }}
            onSubmit={(values) => {
              onSubmit(values).then(() => { });
            }}
            validationSchema={LoginSchema}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
              } = props;
              return (
                <Form className={style.wrapperFormRigth}>

                  <Grid item xs={12} className={style.wrapperFormRigth__info}>
                    <label>Dejanos tus datos</label>
                  </Grid>

                  <Box pb={3}></Box>
                  <TextField
                    label="DNI"
                    variant="outlined"
                    id="dni"
                    type="text"
                    style={{ marginBottom: '20px' }}
                    fullWidth
                    name="dni"
                    value={values.dni}
                    onChange={handleChange}
                    error={touched.dni && Boolean(errors.dni)}
                    helperText={
                      errors.dni && touched.dni ? errors.dni : ""
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBoxIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    label="Celular"
                    variant="outlined"
                    id="celular"
                    fullWidth
                    type="text"
                    style={{ marginBottom: '20px' }}
                    name="celular"
                    value={values.celular}
                    onChange={handleChange}
                    error={touched.celular && Boolean(errors.celular)}
                    helperText={
                      errors.celular && touched.celular ? errors.celular : ""
                    }
                  />

                  <TextField
                    label="Placa"
                    variant="outlined"
                    id="toDate"
                    type="text"
                    style={{ marginBottom: '20px' }}
                    name="placa"
                    value={values.placa}
                    onChange={handleChange}
                    error={touched.placa && Boolean(errors.placa)}
                    helperText={
                      errors.placa && touched.placa ? errors.placa : ""
                    }
                    fullWidth
                  />

                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <FormControlLabel
                        control={<GreenCheckbox checked={values.terms} onChange={handleChange} id="terms" name="terms"
                          value={values.terms} />}
                      />
                    </Grid>
                    <Grid item xs={10} className={style.wrapperFormRigth__link}>
                      Acepto la <span className={style.link__span}>Política de Protección de Datos Personales</span> y los <span className={style.link__span}>Términos y Condiciones.</span>
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={style.wrapperFormRigth__btnSubmit}
                    disabled={(values.terms) ? false : true}
                  >
                    COTÍZALO
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Grid>

      </Grid>
    </Container>
  )
};

export default connect(null)(LoginPage);
