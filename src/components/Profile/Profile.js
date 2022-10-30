import {Avatar, Description, Name, Profiles, Stats, StatsLi, Label, Quantity} from "./Profile.styled";

export function Profile(props) { return (
    <Profiles>
  <Description>
    <Avatar
      src={props.avatar}
      alt="User avatar"
    />
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