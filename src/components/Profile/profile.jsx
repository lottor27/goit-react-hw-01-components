import user from '../user.json';

export const Card = user => {
  return (
    <div class="profile">
      <div class="description">
        <img src="{user.avatar}" alt="{user.username}" class="avatar" />
        <h2 class="name">{user.username}</h2>
        <p class="tag">{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
