import css from './statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      <div className={css.box}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id} id={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
