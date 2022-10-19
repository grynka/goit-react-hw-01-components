import user from '../user.json'
import Profile from './Profile'
import data from '../data.json'
import StatisticList from './StatisticsList'

export default function App () {
  return (
   <div><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />

    
      <StatisticList
      items={data}
      />
        </div>

  );
};
