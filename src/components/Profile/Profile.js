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

export function Profile({avatar, username, tag, location, stats : { followers, views, likes }}) {
  return (
    <Profiles>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
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
  stats: PropTypes.object
};
