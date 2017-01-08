import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export default class App extends Component {
  renderNavigation = () => (
    <Navigation>
      <a href="">Link</a>
    </Navigation>
  );
  renderHeader = () => (
    <Header
      title="Couchgram"
    >
      {this.renderNavigation()}
    </Header>
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
        {this.renderDrawer()}
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}
