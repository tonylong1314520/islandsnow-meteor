import React from 'react';
import { Container, Dropdown, Grid, List, Item } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3} centered>
          <GridColumn width={4}>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Store Locations</List.Item>
              <List.Item>Employment</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Shipping & Returns</List.Item>
              <List.Item>Terms & Conditions</List.Item>
              <List.Item>Privacy Policy</List.Item>
            </List>
          </GridColumn>
          <GridColumn width={4}>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
              <List.Item>Brands</List.Item>
              <List.Item>Sale</List.Item>
            </List>
          </GridColumn>
          <GridColumn width={4}>
            <List>
              <List.Item>Join our mailing lists for updates</List.Item>
              <List.Item>Sign up to receive our email updates</List.Item>
              <List.Item>
                <Input placeholder='Enter email address...' />
                <Button content='Join' size='tiny' secondary />
              </List.Item>
            </List>
          </GridColumn>
        </Grid>
    )
  }
}