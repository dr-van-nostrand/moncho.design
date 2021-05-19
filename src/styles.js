import styled from "styled-components";

//styled components
export const Styled = styled.div`
  justify-content: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    color: #f8e16c;
  }
  p {
    color: white;
  }
`;

export const StyledImage = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyleHide = styled.div`
  overflow: hidden;
`;
