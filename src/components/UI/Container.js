import styled from '@emotion/styled'
import React from 'react'

const StyledContainer = styled.div`
margin: 50px auto;
max-width:400px;
height: 700px;
background-color:#FEFEFE;
`;
export const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
