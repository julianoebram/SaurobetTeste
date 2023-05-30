import { FunctionComponent } from "react";
import ImagemJogo from "./ImagemJogo";
import styles from "./ImagemJogo2.module.css";
const ImagemJogo2: FunctionComponent = () => {
  return (
    <div className={styles.imagemJogo}>
      <div className={styles.rollJogos}>
        <div className={styles.nossosJogos}>Nossos jogos</div>
        <div className={styles.frameParent}>
          <div className={styles.cashOrCrashWrapper}>
            <div className={styles.cashOrCrashContainer}>
              <p className={styles.cashOr}>{`Cash or `}</p>
              <p className={styles.crash}>Crash</p>
            </div>
          </div>
          <ImagemJogo
            rectangle1544="/rectangle-15441@2x.png"
            minesDare="Mines Dare"
            win="2 Win"
          />
          <ImagemJogo
            rectangle1544="/rectangle-15442@2x.png"
            minesDare="Dragons"
            win="Gold 100"
          />
          <div className={styles.imagemJogo1}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-15443@2x.png"
              />
              <div className={styles.aviator}>Aviator</div>
            </div>
          </div>
          <div className={styles.spacemanWrapper}>
            <div className={styles.cashOrCrashContainer}>Spaceman</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagemJogo2;
