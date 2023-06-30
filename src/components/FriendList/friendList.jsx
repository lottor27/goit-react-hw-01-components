import css from './friendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <div className={css.box}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={
                friend.isOnline
                  ? `${css.itemstatus} ${css.onLineStatus}`
                  : `${css.itemstatus} ${css.offLineStatus}`
              }
            >
              {friend.isOnline}
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </div>
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};