import {
  Avatar,
  Description,
  Name,
  Profiles,
  Stats,
  StatsLi,
  Label,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

export function Profile(props) {
  return (
    <Profiles>
      <Description>
        <Avatar src={props.avatar} alt="User avatar" />
        <Name>{props.username}</Name>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{props.stats.followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{props.stats.views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{props.stats.likes}</Quantity>
        </StatsLi>
      </Stats>
    </Profiles>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
