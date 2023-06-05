import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name } from 'components/FriendListItem/FriendListItem.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (

        <Item>
  <Status isOnline={isOnline}></Status>
  <Avatar src={avatar} alt={name} width="48" />
  <Name>{name}</Name>
</Item>
       
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};