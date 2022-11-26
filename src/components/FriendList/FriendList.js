import { FriendListItem } from './FriendListItem';
import { Friends, Item } from './FriendList.styled';
import PropTypes from 'prop-types';


//import PropTypes from 'prop-types';

export const FriendList = ({ lists }) => {
  return (
<Friends>
  {lists.map(list => (
    <Item key={list.id}>
      <FriendListItem item = {list} /> 
    </Item>
  ))}
</Friends>
  );
}

FriendListItem.propTypes = {
  lists: PropTypes.object,
};