import { FunctionComponent } from "react";
import BarraMenu from "./BarraMenu";
import Notificacao from "./Notificacao";
import styles from "./HeaderTop2.module.css";
const HeaderTop2: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <BarraMenu />
      <img
        className={styles.logoSaurobet11}
        alt=""
        src="/logo--saurobet-1-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <Notificacao />
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/frame-1410103065.svg"
          />
        </div>
        <div className={styles.tShirtParent}>
          <img className={styles.tShirtIcon} alt="" src="/tshirt31.svg" />
          <div className={styles.r103403}>R$ 1.034,03</div>
        </div>
        <button className={styles.botao2}>
          <b className={styles.depositar}>Depositar</b>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop2;
