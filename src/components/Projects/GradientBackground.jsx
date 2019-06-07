import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateRows: `1fr ${theme.spacing(16)}px 1fr`,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  firstColor: {
    backgroundColor: theme.palette.background.light,
  },
  secondColor: {
    backgroundColor: theme.palette.background.dark,
  },
  halfway: {
    background: `linear-gradient(to bottom, ${theme.palette.background.light}, ${theme.palette.background.dark})`,
  },
}));

const GradientBackground = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.firstColor} />
      <div className={classes.halfway} />
      <div className={classes.secondColor} />
    </div>
  );
};

export default GradientBackground;