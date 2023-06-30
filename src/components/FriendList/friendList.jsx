import css from './friendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <div className={css.box}>{friends.map(FriendListItem)}</div>
    </ul>
  );
}


function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={
          isOnline
            ? `${css.itemstatus} ${css.onLineStatus}`
            : `${css.itemstatus} ${css.offLineStatus}`
        }
      >
        {isOnline}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={name}>{name}</p>
    </li>
  );
}


FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};