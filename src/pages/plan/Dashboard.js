import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Grid,
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    LooksOneIcon,
    LooksTwoIcon,
    ArrowBackIosIcon,
    IconButton,
    AddIcon,
    RemoveIcon,
    Tabs,
    Tab,
    EmojiTransportationIcon,
    TreeView,
    ExpandMoreIcon,
    ExpandLessIcon,
    TreeItem
} from "../../components/shared/MaterialUI";

import { connect } from "react-redux";
import store from "../../redux/store";
import { useHistory } from "react-router-dom";
import { useUI } from "../../app/context/ui";
import { PlanStyles } from "../../assets/css/plan-style";
import Header from "../../components/Header";
import logo from "../../assets/images/joven.png";

const PlanPage = (props) => {

    const style = PlanStyles();
    const { blockUI } = useUI();
    const state = store.getState();
    const history = useHistory();
    const accessToken = state.user.id;

    if (!accessToken) {
        history.push("/login");
    }

    const handleLogout = async () => {
        try {
            blockUI.current.open(true);
            props.dispatch({ type: 'LOGOUT' });
            history.push('/login');
            blockUI.current.open(false);
        } catch (e) {
            blockUI.current.open(false);
        }
    };

    const [sumaAsegurada, setSumaAsegurada] = useState(14000);

    const handleOperarSumaAsegurada = (num) => {
        setSumaAsegurada(sumaAsegurada+(num))
    }

    const iterarStatusTreeView = (step, status) => {
        let newItems = treeViewItems.map((e) => {
            if (e.id === step.id) {
                return {
                    ...e,
                    status
                }
            } else {
                return { ...e }
            }
        });
        setTreeViewItems([...newItems]);
    }

    const handleTreeView = (step) => {
        console.log(step);
        if (step.status === false){
            step.ref.current.style.display="block";
            iterarStatusTreeView(step, true);
        }else{
            step.ref.current.style.display = "none";
            iterarStatusTreeView(step, false);
        }
    }

    const divStep1 = useRef();
    const divStep2 = useRef();
    const divStep3 = useRef();

    const [treeViewItems, setTreeViewItems] = useState([
        {
            id: 1,
            status: false,
            ref: divStep1
        },
        {
            id: 2,
            status: false,
            ref: divStep2
        },
        {
            id: 3,
            status: false,
            ref: divStep3
        }
    ]);

    const listProtegeTuAuto = [
        {
            id: 1,
            title: 'Llanta robada',
            info: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
            wrapper: divStep1
        },
        {
            id: 2,
            title: 'Choque y/o pasarte la luz',
            info: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
            wrapper: divStep2
        },
        {
            id: 3,
            title: 'Atropello en la vía Evitamiento',
            info: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
            wrapper: divStep3
        }
    ];

    return (
        <Container component="main" maxWidth="lg" className={style.plan}>
            <Header />
            <Grid container className={style.wrapperPlan}>
                <Grid item xs={4} className={style.wrapperPlan__timeLine}>
                    <Timeline>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <LooksOneIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent className={`${style.wrapperPlan__info} ${style.wrapperPlan__info_gray}`}>
                                Datos
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className={style.wrapperPlan__iconTwo}>
                                    <LooksTwoIcon  />
                                </TimelineDot>
                            </TimelineSeparator>

                            <TimelineContent className={`${style.wrapperPlan__info} ${style.wrapperPlan__info_selected}`}>
                                Arma tu Plan
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Grid>
                <Grid item xs={4} className={style.wrapperCentro}>
                    
                    <Grid container>
                        <Grid item xs={12}>
                            <IconButton aria-label="delete" className={style.wrapperCentro__buttonIcon} onClick={handleLogout}>
                                <ArrowBackIosIcon className={style.wrapperCentro__iconBack} />
                            </IconButton>
                            <span className={style.wrapperCentro__messageBack}>VOLVER</span>
                        </Grid>
                        <div className={style.wrapperCentro__name}>
                            ¡Hola, <span style={{ color: 'red' }}>{state.user.username}!</span>
                        </div>
                        <div>
                            Conoce las coberturas para tu plan
                        </div>
                        <Grid container className={style.wrapperCentro__infoVehiculo}>
                            <Grid item xs={6} className={style.wrapperCentro__wrapperInfo}>
                                <div className={style.wrapperCentro__infoVehiculo_placa}>Placa {state.user.placa}</div>
                                <div className={style.wrapperCentro__infoVehiculo_marca}>{state.user.auto.marca} {state.user.auto.anio} {state.user.auto.modelo}</div>
                            </Grid>
                            <Grid item xs={6} className={style.wrapperCentro__wrapperLogo}>
                                <img src={logo} className={style.wrapperCentro__logo} alt='Joven'/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className={style.wrapperCentro__wrapperSumaAsegurada}>
                        <Grid item xs={7}>
                            <div className={style.wrapperSumaAsegurada__info}>Indica la suma asegurada</div>
                            <div className={style.wrapperSumaAsegurada__infoPrecio}>MIN $12.500 | MAX $15.500</div>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container className={style.wrapperSumaAsegurada__bloque}>
                                <Grid item xs={3}>
                                    <IconButton aria-label="restar" className={style.wrapperCentro__buttonSuma} onClick={() => { handleOperarSumaAsegurada(-100)}}>
                                        <RemoveIcon className={style.wrapperCentro__iconSuma} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6} style={{color:'black'}}>
                                    $ {sumaAsegurada}
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton aria-label="sumar" className={style.wrapperCentro__buttonSuma} onClick={() => { handleOperarSumaAsegurada(+100) }}>
                                        <AddIcon className={style.wrapperCentro__iconSuma} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={style.wrapperCentro__divider}>
                        <hr/>
                    </Grid>

                    <div style={{color:'black', marginBottom:'25px'}}>Agrega o quita coverturas</div>

                    <Grid item xs={12}>

                        <Tabs
                            value={0}
                            className={style.wrapperCentro__tabs}
                        >
                        <Tab className={style.wrapperCentro__tab} label="PROTEGE A TU AUTO"/>
                            <Tab className={style.wrapperCentro__tab} label="PROTEGE A LOS QUE TE RODEAN" disabled />
                            <Tab className={style.wrapperCentro__tab} label="MEJORA TU PLAN" disabled/>
                        </Tabs>

                        {
                            listProtegeTuAuto.map((e,i)=>(
                                <div key={e.id}>
                                    <Grid className={style.wrapperCentro__treeView} container>
                                        <Grid item xs={2}>
                                            <EmojiTransportationIcon style={{ fontSize: '35px' }} />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid container>
                                                <Grid item xs={12} className={style.treeView__title}>
                                                    {e.title}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <IconButton aria-label="delete" className={style.treeView__button}>
                                                        <RemoveIcon className={style.treeView__iconButton} />
                                                    </IconButton>
                                                    <span className={style.treeView__messageButton}>AGREGAR</span>
                                                    <div className={style.treeView__info} ref={e.wrapper}>
                                                        {e.info}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TreeView
                                                defaultCollapseIcon={<ExpandMoreIcon style={{ fontSize: '20px', color: 'red' }} />}
                                                defaultExpandIcon={<ExpandLessIcon style={{ fontSize: '20px', color: 'red' }} />}
                                                onClick={() => { handleTreeView(treeViewItems[i]) }}
                                            >
                                                <TreeItem nodeId="1">
                                                    <></>
                                                </TreeItem>
                                            </TreeView>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} className={style.wrapperCentro__dividerGray}>
                                        <hr />
                                    </Grid>
                                </div>
                            ))
                        }

                    </Grid>

                    
                    
                </Grid>
                <Grid item xs={4}>
                    
                </Grid>
            </Grid>
        </Container>
    )
};

export default connect(null)(PlanPage);
