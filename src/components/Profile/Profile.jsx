import PropTypes from 'prop-types';
import { ProfileContainer, Description, Avatar, Name, Tag, Location, Stats, StatsList, Label, Quantity } from 'components/Profile/Profile.styled';

const Profile = ({
   avatar,
    username,
    tag,
    location,
    followers,
    views,
    likes, stats
}) => {
    return (
        <ProfileContainer>
            <Description>
                <Avatar src={avatar} alt="User avatar" className="avatar" />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            
            <Stats>
                <StatsList>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsList>
                <StatsList>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsList>
                <StatsList>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsList>
            </Stats>
        </ProfileContainer>
    );
};
export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};