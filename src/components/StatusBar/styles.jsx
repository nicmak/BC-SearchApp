import styled from 'styled-components';

export const StatusBarContainer = styled.div`
 transition: background 0.5s ease;
  ${props => {
      if (props && props.matchResult && props.cityInput) {
        return 'background: green;'
      }
      return 'background: #c52323;'
  }}
  color: white;
  width: 75%;
  padding: 1rem;
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;