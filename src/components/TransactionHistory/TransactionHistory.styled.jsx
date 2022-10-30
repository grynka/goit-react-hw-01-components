import styled from '@emotion/styled';

export const Transaction = styled.table`
  width: 800px;
  display: table;
  margin: 0 auto;
  margin-top: 100px;
  line-height: 3;
`;

export const Thead = styled.thead`
  display: table-header-group;
  color: white;
  background-color: darkcyan;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
`;

export const RowGray = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;
