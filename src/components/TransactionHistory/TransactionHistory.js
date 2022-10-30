import { Transaction, Thead, RowGray } from './TransactionHistory.styled';
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
            <td style={{ paddingLeft: 110, width: '33%' }}>{type}</td>
            <td style={{ paddingLeft: 0, width: '33%', textAlign: 'center' }}>
              {amount}
            </td>
            <td style={{ paddingLeft: 0, width: '33%', textAlign: 'center' }}>
              {currency}
            </td>
          </RowGray>
        ))}
      </tbody>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
