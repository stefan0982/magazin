import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

export default function DetailsList({title, data}) {

  return (
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{marginLeft: 20, fontWeight: 550, marginTop: 15}}>
            {title}
          </Typography>
          <Divider variant="middle" style={{height: 1.5, backgroundColor: 'black'}}/>
          <List style={{margin: `2px 15px 0 20px`}}>
          {data && data.map(text => <ListItemText key={text} primary={text}/>)}
          </List>
        </Grid>
      </Grid>
  )
}