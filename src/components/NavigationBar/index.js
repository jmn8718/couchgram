import React, { PropTypes } from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between !important;
  padding: 0 48px !important;
`;

const NavigationBar = ({ title, children }) => {
  return (
    <header className="mdl-layout__header is-casting-shadow">
      <Wrapper className="mdl-layout__header-row">
        <div className="mdl-layout-title">{title}</div>
        <SearchBar />
        {children}
      </Wrapper>
    </header>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

NavigationBar.defaultProps = {
  title: '',
  children: <div></div>,
}
export default NavigationBar;
