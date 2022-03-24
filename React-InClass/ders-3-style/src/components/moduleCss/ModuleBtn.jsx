import styles from './moduleBtn.module.css';

const ModuleBtn = ({btnStyle, btnName}) => {
  return (
    <div className={styles.main}>
      <button className={styles[btnStyle]}>
{btnName}
      </button>
    </div>
  )
}
// module.css uniqe classname'ler ürettiği için normal css de yaşanan çakışmalar yaşanmaz
// inspect yaparak module css’in oluşturduğu class isimlendirmesini görebilirsiniz bu sayede nasıl unique classlar oluşturduğunu görebilirsiniz
export default ModuleBtn

