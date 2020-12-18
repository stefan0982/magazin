import React             from 'react'
import { makeStyles }    from '@material-ui/core/styles'
import Button            from '@material-ui/core/Button'
import Grid              from '@material-ui/core/Grid'
import Divider           from '@material-ui/core/Divider'
import Typography        from '@material-ui/core/Typography'
import Dialog            from '@material-ui/core/Dialog'
import DialogTitle       from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField         from '@material-ui/core/TextField'
import DialogContent     from '@material-ui/core/DialogContent'
import DialogActions     from '@material-ui/core/DialogActions'
import { destroy }       from "cart-localstorage";
import { Link }          from "gatsby";
import { useSnackbar }   from "notistack";
import InputAdornment    from "@material-ui/core/InputAdornment";

const useStyles = makeStyles( (theme) => (
  {
    root    : {
      width          : '100%',
      backgroundColor: theme.palette.background.paper,
    },
    section1: {
      margin: theme.spacing( 3, 2 ),
    },
    section3: {
      margin: theme.spacing( 3, 1, 1 ),
    },
  }
) )

export default function Totals({total}) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const {enqueueSnackbar} = useSnackbar()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (variant) => {
      enqueueSnackbar('Comanda a fost efectuată', {
        variant,
        autoHideDuration: 10000,
      })
  }

  return (
    <div className={ classes.root }>
      <div className={ classes.section1 }>
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
              variant="h4"
            >
              Total
            </Typography>
            {total <= 50 ? <Typography variant="body2" style={{ marginRight: 40 }}>
              <span style={{ color: 'red' }}>*</span> trebuie să fie mai mare de 50 de MDL
            </Typography> : ''}
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant="h5"
              style={{ color: 'red' }}
            >
              {total} MDL
            </Typography>

          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={ classes.section3 }>
        <Button
          style={{
            fontWeight: 700,
            color: 'white',
            fontSize: '1.1rem'
          }}
          color={"primary"}
          variant="contained"
          onClick={handleClickOpen}
          fullWidth={ true }
          disabled={total <= 50}
        >Comandă</Button>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Comanda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pentru a finaliza comanda trebuie să introduceți:
          </DialogContentText>
          <TextField
              // autoFocus
            margin="dense"
            label="Numele și prenumele"
            fullWidth
          />
          <TextField
            margin="dense"
            label="Telefonul"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">0</InputAdornment>,
            }}
          />

        </DialogContent>
        <DialogActions>
          <Link to={'/cart'} className="link-disable">
          <Button onClick={() => {
            destroy()
            handleClose()
            handleFormSubmit('success')
          }} color="primary">
            Finalizează
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}