import { Statistic, StatList, Title, StatItem, Percentage, Label } from "./Statistics.styled";

export function Statistics({ items }) { return (
<Statistic>
<Title>Upload stats</Title>
<StatList>
{items.map(item => 
    <StatItem key={item.id} style = {{backgroundColor: getRandomHexColor()}}>
    <Label>{item.label}</Label>
    <Percentage>{item.percentage}%</Percentage>
    </StatItem> )}
    </StatList>
</Statistic>
)}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }