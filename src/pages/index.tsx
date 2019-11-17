import * as React from "react";
import { RouterProps } from "@reach/router";

import Layout from "../components/layout";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Grid container spacing={32} direction="column">
      <Grid item>
        <Typography variant="h1">Okkebas Huisweekend</Typography>
        <Typography variant="h2" color="primary" gutterBottom>
          Alle informatie, lekker bij de hand
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Algemene informatie</Typography>
        <Typography variant="body1">
          Jullie zullen gedurende de aankomende week en het huisweekend meer
          hints, tips, tricks, aanwijzingen, inlichtingen en instructies
          ontvangen.
        </Typography>
        <Divider style={{ margin: "2rem 0" }}></Divider>
        <Typography variant="h3">Paklijst</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Laat me die shit vertellen" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Laat me die shit vertellen" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Laat me die shit vertellen" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </Layout>
);

export default IndexPage;
