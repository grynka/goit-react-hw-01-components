import { Status } from './FriendList.styled';
import PropTypes from 'prop-types';

export function FriendListItem({item : { isOnline, avatar, name }}) {
  return (
        <>
          <Status type = {isOnline} />
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
          </>
      );
}

FriendListItem.propTypes = {
  item: PropTypes.object,
};
