import css from './friendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <div className={css.box}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span className={css.itemstatus}>{friend.isOnline}</span>
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
