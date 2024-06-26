import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: ${props => props.theme.gray_100};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.gray_500};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 .5rem;

  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme.gray_500};
  }

  &::placeholder{
    color: ${props => props.theme.gray_500};
    
  }

  color: ${props => props.theme.gray_100};
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme.gray_100};

  display: flex;
  gap: 1rem;

  span{
    background-color: ${props => props.theme.gray_700};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme.green_500};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  font-weight: bold;
  cursor: pointer;

  background-color: ${props => props.theme.green_500};
  color: ${props => props.theme.gray_100};

  &:disabled{
    opacity: .7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background-color: ${props => props.theme.green_700};
  }
`;