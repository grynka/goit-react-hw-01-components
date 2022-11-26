import user from '../user.json';
import { Profile } from './Profile/Profile';
import data from '../data.json';
import { Statistics } from './StatisticsList/Stastics';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title = "Upload stats"
        stats={data}
      />
      <FriendList lists = {friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
