import styled from 'styled-components';

export const CityFieldContainer = styled.section`
  width: 87%;
  border: 4px solid #00c1ca99;
  border-radius: 24px;
  padding: 0.5rem 0;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  margin: 2rem;
`
export const SuggestedContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 1px;
  width: 100%;

`

export const InputContainer = styled.input`
  font-size: 20px;
  width: 90%;
  border: none;
  outline: none;
  margin-left: 1rem;

`

export const SuggestedList = styled.ul`
  list-style-type: none;
  padding: 0rem;
  pointer-events: ${props => props.disableMouse && 'none'};
`;

export const SuggestedListItems = styled.li`
  background: ${props => props.isActive && '#DCDCDC'};
  font-size: 20px;
  padding: 0.3rem 2rem;
  cursor: pointer;
`
