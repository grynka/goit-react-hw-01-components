import { Transaction, Thead, RowGray, Col } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <Transaction>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <RowGray key={id}>
            <Col>{type}</Col>
            <Col>{amount}</Col>
            <Col>{currency}</Col>
          </RowGray>
        ))}
      </tbody>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,

};
