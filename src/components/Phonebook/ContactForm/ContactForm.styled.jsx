import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 580px;

  & > :not(:last-child) {
    margin-bottom: 30px;
  }

  & .MuiFormHelperText-root {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: red;
  }
`;
