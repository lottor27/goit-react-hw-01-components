import css from './friendList.module.css';
import PropTypes from 'prop-types';
import {FriendListItem} from '../FriendListItem/FriendListItem'

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <div className={css.box}>{friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}</div>
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};







