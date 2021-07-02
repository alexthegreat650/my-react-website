import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import './WebsiteInvestment.css';

// React Icons
import { MdAttachMoney } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';


// Imported components
import { FaBars } from 'react-icons/fa';
import HeroDashboard from './HeroDashboard';
import LineChart from './Charts/Chart';
import Sidebar from './Sidebar';
import RevenueChart from './Charts/RevenueChart';
import TrafficChart from './Charts/TrafficChart';
import ExpensesChart from './Charts/ExpensesChart';
import RevenuePie from './Charts/RevenuePie';

const DashboardMenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${FaBars});
        background-size: contain;
        height: 30px;
        width: 40px;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 175px;
        right: 0;
        transform: translateY(-50%, 25%);

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;

const MoneyTime = styled.div`
    position: relative;
    top: 70px;
    right: 240px;
    display: flex;
`;

const MoneyClocks = styled.div`
    position: relative;
    bottom: 10px;
    right: 300px;
`;

const Line = styled.div`
    border: 1px solid #000;
    height: 10px;
    transform: rotate(90deg);
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    hero: {
        backgroundColor: '#fff',
        height: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        fontSize: '4rem'
    },
    cardTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: 'black',
        marginLeft: '30%'
    },
    blogsContainer: {
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex'
    },
    monetization: {
        padding: '50px',
        height: '300px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
    },
    money: {
        textDecoration: 'underline'
    },
    moneyMaker: {
        '@media (max-width: 768px)': {
            position: 'relative',
            top: '210px',
            right: '50px',
        },
    },
    searchBarShadow: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
    },
    card: {
        width: '400px',
        height: '350px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px'
        }
    },
    content: {
        height: '400px'
    },
    cardAction: {
        display: 'flex'
    }
}));


function WebsiteInvestment(toggle) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    </IconButton>
                    <Typography variant='h6' className={classes.title} style={{marginLeft: 28}}>
                        Nichements
                    </Typography>
                    <DashboardMenuBars onClick={toggle} />
            </AppBar>
            <div className='main-container'>
                <Sidebar />
                <div className='others'>
                <LineChart />
                <Container style={{ marginBottom: '15px' }}>
                    <HeroDashboard />
                </Container>
                    <Grid className={ `${classes.blogsContainer} ${classes.moneyMaker}` } container spacing={1}>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <BsGraphUp size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'royalblue' }}>Traffic</Typography>
                                <MoneyTime>
                                    <TrafficChart />
                                </MoneyTime>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <MdAttachMoney size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'green'}}>Revenue</Typography>
                                <MoneyTime>
                                    <RevenueChart />
                                </MoneyTime>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <GiMoneyStack size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'red'}}>Expenses</Typography>
                                <MoneyTime>
                                    <ExpensesChart />
                                </MoneyTime>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <Typography className={classes.cardTitle} style={{ color: '#21B6A8', textAlign: 'center' }}>Monetization Split</Typography>
                                <MoneyClocks>
                                    <RevenuePie />
                                </MoneyClocks>
                            </Box>
                        </Card>
                    </Grid>
                </div>
            </div>
        </div>
    );
}


export default WebsiteInvestment


// get dropdown menu to show up

// Center chart titles
// Add pie chart for fourth card