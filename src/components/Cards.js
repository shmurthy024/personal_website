import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  raised: true
});


export default function Cards() {
  let history = useHistory();
  const redirect = () => {
    history.push('resume')
  }
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Shree Murthy

        </Typography>
        <Typography variant="h5" component="h2">
          B.S. Computer Science 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Class of 2024
        </Typography>
        <Typography variant="body2" component="p">
          Chapman University
          <br />
          <br/>
          {'"Nothing can surpress a human' + '\'s curiosity" - Eren Jaeger'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={redirect}>Learn More</Button>
      </CardActions>
    </Card>
  );
}