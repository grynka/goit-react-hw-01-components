import { Transaction, Thead, RowGray } from "./TransactionHistory.styled"

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
  {items.map(item =>
    <RowGray key = {item.id}>
      <td style={{paddingLeft: 110, width: "33%"}}>{item.type}</td>
      <td style={{paddingLeft: 0, width: "33%", textAlign: "center"}}>{item.amount}</td>
      <td style={{paddingLeft: 0, width: "33%", textAlign: "center"}}>{item.currency}</td>
    </RowGray>
 )}

  </tbody>
</Transaction>)
}

