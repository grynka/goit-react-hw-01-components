import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  padding: 0;
  margin-top: 100px;
`;
export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 15px;
  background-color: ${props => {
    switch (props.type) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return;
    }
  }};
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  margin-bottom: 10px;
`;
