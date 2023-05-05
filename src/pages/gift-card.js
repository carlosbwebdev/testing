// pages/gift-card.js
import { useState, useRef } from "react";
import styles from "../styles/pages/gift-card.module.css";
import Layout from "@/components/UI/Layout";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import GiftCardTemplate from "@/components/GiftCardTemplate";

export default function GiftCard() {
  const [name, setName] = useState("");
  const [selectedPasseio, setSelectedPasseio] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const giftCardTemplateRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || selectedPasseio === "") {
      alert("Por favor, preencha todos os campos");
      return;
    }

    console.log("Gerando imagem...");
    const canvas = await html2canvas(giftCardTemplateRef.current);
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    console.log("Gerando PDF...");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a6",
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 148, 105);
    pdf.setFontSize(16);
    pdf.setTextColor("black");
    pdf.text(`Nome: ${name}`, 20, 50);
    pdf.text(`Passeio Escolhido: ${selectedPasseio}`, 20, 66);

    console.log("Salvando PDF...");
    pdf.save("gift-card.pdf");
  };
  if (formSubmitted) {
    return (
      <div className={styles.container}>
        <h1>Obrigado por comprar o Gift Card!</h1>
        <p>Confira o seu email para instruções de pagamento e confirmação.</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <GiftCardTemplate
          name={name}
          selectedPasseio={selectedPasseio}
          ref={giftCardTemplateRef}
        />

        <h1>Comprar Gift Card</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Nome:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />

          <label htmlFor="passeio" className={styles.label}>
            Escolha o Passeio:
          </label>
          <select
            id="passeio"
            value={selectedPasseio}
            onChange={(e) => setSelectedPasseio(e.target.value)}
            className={styles.select}
            required
          >
            <option value="">Selecione um passeio</option>
            <option value="passeio1">Passeio 1</option>
            <option value="passeio2">Passeio 2</option>
            <option value="passeio3">Passeio 3</option>
          </select>

          <button type="submit" className={styles.button}>
            Check Out
          </button>
        </form>
      </div>
    </Layout>
  );
}
