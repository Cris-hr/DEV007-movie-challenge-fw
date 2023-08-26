import styles from "./movieCard.module.css";

export function MovieCard({ movie }) {
  console.log(styles);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieTitle}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  );
}
