import css from './friendList.module.css';
import PropTypes from 'prop-types';

export function FriendListItem ({ avatar, name, isOnline, id }) {
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


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  
};