import { Paper, Typography, makeStyles, Grid} from '@material-ui/core';
import React from 'react';
import Cards from '../components/Cards';
import './Home.css';


const useStyles = makeStyles({
    paper: {
      width: "100%",
      height: "100vh",
      paddingTop: "0%",
      paddingRight: "55%",
      backgroundColor: 'inherit'
    },
    
    card:{
      paddingLeft: "50%",
      paddingRight: "0%",
      paddingTop: "15%",
      justify: "right"
    },
    
    carousel: {
      paddingLeft: "40%",
      paddingBottom: "30%",
      justify: "center"
    }
  });

export default function Home() {
    const classes = useStyles()
    return(
        
        <div className="home-div">
          <Paper className={classes.paper} style={{height: "100%"}, {width: "100%"}, { overflowY: 'scroll' }} square>
            <Grid container xs={3} justify="center" className={classes.card}>
              <Cards></Cards>
            </Grid>
            
           
            
          </Paper>
        </div>  
    )

}