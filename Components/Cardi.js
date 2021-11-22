import styles from "../styles/Cardi.module.scss";
function Cardi({ object, tags }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_top}>
        <div className={styles.card_img}>
          <img className={styles.img1} src={object.img1} alt="" />
          <img className={styles.img2} src={object.img2} alt="" />
        </div>
        <div className={styles.card_text}>
          <h2>{object.title}</h2>
          <p>{object.description}</p>
        </div>
      </div>
      <div className={styles.card_bottom}>
        {tags.map((el, key) => {
          return <span key={key}>{el}</span>;
        })}
      </div>
    </div>
  );
}

export default Cardi;
