import styles from "../footer/style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a href="">Facebook</a>
      <a href="https://www.instagram.com/tumecotour/">Instagram</a>
      <a href="https://www.youtube.com/channel/UCjq7-20-UJOwd1kFRmN40hg">
        Youtube
      </a>
      <a>LinkedIn</a>
    </div>
  );
}
