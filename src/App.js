import React, { Component } from 'react';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import NavigationBar from './components/NavigationBar';

export default class App extends Component {
  renderNavigation = () => (
    <Navigation>
      <a href="">Link</a>
    </Navigation>
  );

  renderHeader = () => (
    <NavigationBar
      title="Couchgram"
    >
      {this.renderNavigation()}
    </NavigationBar>
  );

  renderDrawer = () => (
    <Drawer title="Couchgram">
      {this.renderNavigation()}
    </Drawer>
  );

  render() {
    return (
      <Layout fixedHeader>
        {this.renderHeader()}
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
