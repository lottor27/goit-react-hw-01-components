import css from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      <div className={css.box}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={css.item}
              key={stat.id}
              id={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

