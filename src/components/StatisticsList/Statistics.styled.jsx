import styled from '@emotion/styled';

export const Statistic = styled.section`
  width: 250px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
  background-color: ghostwhite;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  padding-top: 30px;
  margin: 0;
`;

export const StatItem = styled.li`
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 50px;
  flex-direction: column;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;

export const Label = styled.span`
  font-size: 12px;
`;
