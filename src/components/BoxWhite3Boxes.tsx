import { FunctionComponent } from "react";
import styles from "./BoxWhite3Boxes.module.css";
const BoxWhite3Boxes: FunctionComponent = () => {
  return (
    <div className={styles.boxwhite3Boxes}>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon2.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Conta</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon3.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Depositar</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon4.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Sacar</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon5.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Indique um amigo</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon6.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Transações</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon7.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Histórico</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon8.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Bônus</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon9.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Preferências</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon10.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Fairness</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon11.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Suporte ao Vivo</div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon12.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Reconpensas</div>
        </div>
      </div>
      <div className={styles.boxwhite3BoxesChild} />
      <div className={styles.iconParent}>
        <img className={styles.icon11} alt="" src="/icon13.svg" />
        <div className={styles.contaWrapper}>
          <div className={styles.conta}>Sair</div>
        </div>
      </div>
    </div>
  );
};

export default BoxWhite3Boxes;
