function TransactionHistory({ items }) {
    return (
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(item =>
    <tr key = {item.id}>
      <td style={{paddingLeft: 110, width: "33%"}}>{item.type}</td>
      <td style={{paddingLeft: 0, width: "33%", textAlign: "center"}}>{item.amount}</td>
      <td style={{paddingLeft: 0, width: "33%", textAlign: "center"}}>{item.currency}</td>
    </tr>
 )}

  </tbody>
</table>)
}

export default TransactionHistory;