import user from '../components/user.json';
import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import data from '../components/data.json';
import friends from '../components/friends.json';
import FriendList from './FriendList/friendList';
import transactions from '../components/transactions.json';
import TransactionHistory from './TransactionHistory/transactionHistory';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export { App };
// Компоненты всех заданий рендерятся на одной странице, внутри общего контейнера - корневого компонента <App>.
