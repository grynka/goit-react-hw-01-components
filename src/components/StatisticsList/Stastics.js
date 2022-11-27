import {
  Statistic,
  StatList,
  Title,
  StatItem,
  Percentage,
  Label,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ stats, title }) {
  return (
    <Statistic>
    {title 
     ? <Title>{title}</Title>
     : null
    }
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Statistic>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes={
  stats: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number
  }),
  title: PropTypes.string,
};
