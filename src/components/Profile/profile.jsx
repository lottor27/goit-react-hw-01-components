import css from './profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.box}>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <div className={css.textDescription}>
            <h2 className={css.name}>{username}</h2>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <ul className={css.stats}>
          <li className={css.statsList}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.statsList}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.statsList}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
