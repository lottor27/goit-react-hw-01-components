import user from '../user.json';



export const Card = ({ avatar, username, tag, location, stats}) => {
    return (
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={username} className="avatar" />
          <h2 className="name">{username}</h2>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">4</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">5</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">6</span>
          </li>
        </ul>
      </div>
    );
};
