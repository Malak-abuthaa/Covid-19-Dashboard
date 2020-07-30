import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ChartistGraph from "react-chartist";
import axios from "axios";

// import components 
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import Minwatch from "../components/MinutesWatch/minuteswatch.jsx";
import AccessTime from "@material-ui/icons/AccessTime";



// css
import "../assets/css/material-dashboard-react.css";
import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


class Dashboard extends React.Component {

    state = {
        IsLoaded: false,
        infected: 0,
        recovery: 0,
        deaths: 0,
        label: [],
        data: [],
        hightVal: 0,
        low: 0,

    };
    componentDidMount() {
        axios.get(`https://corona.lmao.ninja/v2/all?yesterday`)
            .then(res => {
                this.setState({
                    infected: res.data.updated.toLocaleString(),
                    recovery: res.data.recovered.toLocaleString(),
                    deaths: res.data.deaths.toLocaleString(),

                });
            })
        axios.get('https://corona.lmao.ninja/v2/historical/Jordan?lastdays=30')
            .then(res => {
                const temp = res.data.timeline.cases;
                const labels = [];
                const dataa = [];
                var i = 0;
                var max = -1;
                var min = 10000000;
                for (var key in temp) {
                    //arrzone[key] = temp[key].name;
                    labels[i] = key;
                    dataa[i] = temp[key];
                    console.log("Token " + labels[i]);
                    i++;
                    if (temp[key] > max)
                        max = temp[key];
                    if (temp[key] < min)
                        min = temp[key];

                }
                this.setState({
                    label: labels,
                    data: dataa,
                    IsLoaded: true,
                    hightVal: max,
                    low: min


                });

                console.log("label " + labels);
                console.log("data " + dataa);



            })

        this.forceUpdate();
        this.setState({

            IsLoaded: true,


        })
    }

    render() {
        const { classes } = this.props;
        const { infected } = this.state;
        const { recovery } = this.state;
        const { deaths } = this.state;
        const { IsLoaded } = this.state;
        const { hightVal } = this.state;
        const { low } = this.state;
        if (IsLoaded) {
            return (
                <div >
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader color="danger" stats icon><p className={classes.cardCategory}>Infected</p></CardHeader>
                                <CardBody><h4 className={classes.cardTitle}>{infected} </h4> </CardBody>
                                <CardFooter stats><div className={classes.stats}><AccessTime /> updated <Minwatch /></div>
                                </CardFooter>
                            </Card>
                        </GridItem>

                        <GridItem xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader color="success" stats icon><p className={classes.cardCategory}>Recovery </p></CardHeader>
                                <CardBody><h4 className={classes.cardTitle}>{recovery}</h4></CardBody>
                                <CardFooter stats><div className={classes.stats}><AccessTime /> updated <Minwatch /></div></CardFooter>
                            </Card>
                        </GridItem>


                        <GridItem xs={12} sm={12} md={4}>
                            <Card>
                                <CardHeader color="info" stats icon><p className={classes.cardCategory}>Deaths</p></CardHeader>
                                <CardBody><h4 className={classes.cardTitle}>{deaths}</h4></CardBody>
                                <CardFooter stats><div className={classes.stats}><AccessTime /> updated <Minwatch /></div></CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>

                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card chart>
                                <CardHeader color="warning">
                                    <ChartistGraph
                                        className="ct-chart"
                                        data={{
                                            labels: this.state.label,
                                            series: [this.state.data]
                                            }}
                                        options={{
                                            low: { low },
                                            high: { hightVal } + { hightVal } / 3, 
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            layout: {
                                                    padding: {
                                                    top: 0,
                                                    right: 5,
                                                    bottom: 10,
                                                    left: 0
                                                }
                                            }
                                        }}
                                        type="Line"

                                    />
                                </CardHeader>
                                <CardBody><h4 className={classes.cardTitle}>Number Cases in Jordan in the last 30 Days </h4></CardBody>
                                <CardFooter chart><div className={classes.stats}><AccessTime /> updated <Minwatch /></div></CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            );
        }
        else return null;
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
