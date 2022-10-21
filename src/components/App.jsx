import user from '../user.json'
import Profile from './Profile'
import data from '../data.json'
import Statistics from './Stastics'
import FriendList from './FriendList'
import friends from '../friends.json'

export default function App () {
  return (
   <div><Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
<Statistics 
 items={data} />

      <FriendList  
      items={friends} />
        </div>


  );
};
