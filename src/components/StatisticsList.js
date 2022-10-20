import Statistics from "./Stastics"

function StatisticsList({ items }) {
  return(
<section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
    {items.map(item => 
    <li key={item.id}>
     <Statistics
    label = {item.label}
    percentage = {item.percentage} />
    </li>)}
    </ul>
</section>
  );
}

export default StatisticsList;