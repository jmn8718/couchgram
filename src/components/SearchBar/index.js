import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

const SearchBar = () => {
  return (
    <Wrapper>
      SearchBar
    </Wrapper>
  );
};

export default SearchBar;
