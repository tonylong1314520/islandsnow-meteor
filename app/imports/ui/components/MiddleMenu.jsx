import React from 'react';
import { Dropdown, Grid } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered container>
          <Dropdown item text="MALE"></Dropdown>
          <Dropdown item text="WOMEN"></Dropdown>
          <Dropdown item text="KIDS"></Dropdown>
          <Dropdown item text="BRAND"></Dropdown>
          <Dropdown item text="SALE" icon=""></Dropdown>
        </Grid>
    )
  }
}