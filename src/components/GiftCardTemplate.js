import React, { forwardRef } from "react";
import styles from "../styles/components/GiftCardTemplate.module.css";
import Image from "next/image";
import bg from "../../public/bgGiftCard.png";

const GiftCardTemplate = forwardRef(({ name, selectedPasseio }, ref) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      <div id="giftCardTemplate" className={styles.giftCardTemplate}>
        {/* Seu design de gift card como JSX */}
        <div className={styles.image}>
          <Image
            src={bg}
            alt="Gift Card Template"
            width="148mm"
            height="105mm"
          />
        </div>
        <div className={styles.text}>
          <p>Nome: {name}</p>
          <p>Passeio Escolhido: {selectedPasseio}</p>
        </div>
      </div>
    </div>
  );
});
GiftCardTemplate.displayName = "GiftCardTemplate";

export default GiftCardTemplate;
