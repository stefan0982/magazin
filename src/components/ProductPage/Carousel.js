import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Img from 'gatsby-image'
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,
    marginTop: 10
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 'auto',
    display: 'block',
    maxWidth: 800,
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper({images}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/*<Paper square elevation={0} className={classes.header}>*/}
      {/*</Paper>*/}
      <Divider/>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((image, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Img className={classes.img} fluid={image.fluid} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
