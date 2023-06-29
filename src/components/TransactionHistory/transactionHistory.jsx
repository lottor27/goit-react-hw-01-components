import css from './transactionHistory.module.css';

export default function TransactionHistory({ items}) {
    return (
      <div className={css.box}>
        <table className={css.transactionHistory}>
          <thead>
            <tr> 
              <th className={css.headListItem}>Type</th>
              <th className={css.headListItem}>Amount</th>
              <th className={css.headListItem}>Currency</th>
            </tr>
          </thead>

          {items.map(item => (
            <tbody className={css.listItemBody} key={item.id}>
              <tr>
                <td className={css.listItem}>{item.type}</td>
                <td className={css.listItem}>{item.amount}</td>
                <td className={css.listItem}>{item.currency}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
    
}
