import { Status } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendListItem({item : { isOnline, avatar, name }}) {
  return (
        <>
          <Status type={isOnline.toString()}></Status>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
          </>
      );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
