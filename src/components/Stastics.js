function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function Statistics({ items }) { return (
<section className="statistics">
<h2 className="title">Upload stats</h2>
<ul className="stat-list">
{items.map(item => 
    <li key={item.id} style = {{backgroundColor: getRandomHexColor()}}>
    <span className="label">{item.label}</span>
    <span className="percentage">{item.percentage}%</span>
    </li> )}
    </ul>
</section>
)}

export default Statistics