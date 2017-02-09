import React from 'react';
import { FABButton, Icon } from 'react-mdl';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const AddButton = ({ onClick }) => {
  return (
    <Wrapper>
      <FABButton colored ripple onClick={onClick}>
        <Icon name="add" />
      </FABButton>
    </Wrapper>
  );
}

AddButton.defaultProps = {
  onClick: () => {},
}
export default AddButton;
