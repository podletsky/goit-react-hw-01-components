import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { List } from 'components/FriendList/FriendList.styled';

const FriendList = ({ friends }) => {
    return (
            <List>
             {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
               key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}     
            />
        ))}
</List>
    )
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};