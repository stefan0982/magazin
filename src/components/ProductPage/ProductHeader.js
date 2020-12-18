import React from 'react'
import { makeStyles }      from '@material-ui/core/styles'
import Grid                from '@material-ui/core/Grid'
import Typography          from '@material-ui/core/Typography'

const useStyles = makeStyles( (theme) => (
  {
    root    : {
      width          : '100%',
      maxWidth       : 800,
      marginBottom: 10,
      backgroundColor: theme.palette.background.paper,
    },
    chip    : {
      margin: theme.spacing( 0.5 ),
    },
    section1: {
      margin: theme.spacing( 3, 2 ),
    },
    section2: {
      margin: theme.spacing( 2 ),
    },
    section3: {
      margin: theme.spacing( 3, 1, 1 ),
    },
  }
) )

export default function ProductHeader({ name }) {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <div className={ classes.section1 }>
        {/*<Typography*/}
        {/*  color="textSecondary"*/}
        {/*  variant="body1"*/}
        {/*  align="center"*/}
        {/*>*/}
        {/*  Codul: { cod }*/}
        {/*</Typography>*/}
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs
          >
            <Typography
              gutterBottom
              variant="h6"
              align="center"
              style={{ marginBottom: -10 }}
            >
              { name }
            </Typography>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}