import Statistics from "./Stastics"

function StatisticsList({ items }) {
  return(
<section class="statistics">
  <h2 class="title">Upload stats</h2>
  <ul class="stat-list">
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