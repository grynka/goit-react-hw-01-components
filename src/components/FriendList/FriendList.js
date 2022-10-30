import { Friends, Status, Item } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendList({ items }) {
  return (
    <Friends>
      {items.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          <Status type={isOnline.toString()}></Status>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </Item>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
