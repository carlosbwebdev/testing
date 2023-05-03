import React, { useEffect, useState } from "react";
import styles from "../styles/components/ModalReserve.module.css";
import { Data } from "../pages/passeios";

const ModalReserve = ({ isOpen, closeModal, passeio }) => {
  const initialFormState = {
    Horario: "0",
    Buggies: "0",
    Passeio: passeio,
  };

  const [formValues, setFormValues] = useState(initialFormState);
  const [price, setPrice] = useState(0);

  // Atualiza o estado formValues.passeio quando a prop passeio mudar
  useEffect(() => {
    setFormValues((prevValues) => ({ ...prevValues, Passeio: passeio }));
  }, [passeio]);

  // Atualiza o preço com base no valor selecionado de formValues.passeio
  useEffect(() => {
    const selectedPasseio = formValues.Passeio;

    if (selectedPasseio === "Básico") {
      setPrice(35);
    } else if (selectedPasseio === "Por Maus Caminhos") {
      setPrice(50);
    } else if (selectedPasseio === "Baloiço Do Mezio") {
      setPrice(80);
    } else if (selectedPasseio === "Do Lima Ao Gião") {
      setPrice(110);
    } else if (selectedPasseio === "Longa Distância") {
      setPrice(140);
    } else if (selectedPasseio === "O Dia Todo") {
      setPrice("A combinar");
    }

    setFormValues((prevValues) => ({ ...prevValues, Buggies: "0" }));
    setFormValues((prevValues) => ({ ...prevValues, Horario: "0" }));
  }, [formValues.Passeio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""}`}>
      <div className={styles.modalContent}>
        <span
          onClick={() => {
            closeModal();
            setFormValues(initialFormState);
          }}
          className={styles.close}
        >
          &times;
        </span>
        <div className={styles.title}>
          <h1>Reserve Já!</h1>
          <p>
            Preencha o formulário abaixo e entraremos em contacto consigo para
            confirmar a sua reserva.
          </p>
        </div>
        <form action="https://formspree.io/f/mnqywvkb" method="POST">
          <input name="Nome" type="text" placeholder="Nome" required />
          <input name="Email" type="text" placeholder="Email" required />
          <input
            name="Telemóvel"
            type="number"
            placeholder="Telemóvel"
            required
          />
          <label htmlFor="Data">Data:</label>

          <input name="Data" type="date" placeholder="Data" required />
          <label htmlFor="Passeio">Passeio</label>
          <select
            name="Passeio"
            value={formValues.Passeio}
            onChange={handleChange}
            required
          >
            {/* Renderiza a opção do passeio passado como prop no final da lista */}
            <option value="0" selected>
              Selecione o Passeio
            </option>
            <option value={passeio}>{passeio}</option>
            {Data?.map((item) => {
              // Ignora a renderização da opção se o passeio já foi passado como prop
              if (item.title === passeio) {
                return null;
              }

              return (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
          <select
            name="Horario"
            value={formValues.Horario}
            onChange={handleChange}
            required
          >
            <option value="0">Hórario</option>
            <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
            <option value="Tarde (14h - 19h)">Tarde (14h - 19h)</option>
          </select>
          <select
            name="Buggies"
            value={formValues.Buggies}
            onChange={handleChange}
            required
          >
            <option value="0" selected>
              Nº de Buggies
            </option>
            <option value="1">1 (2 - pessoas)</option>
            <option value="2">2 (4 - pessoas)</option>
            <option value="3">3 (6 - pessoas)</option>
            <option value="4">4 (8 - pessoas)</option>
            <option value="5">5 (10 - pessoas)</option>
            <option value="6">6 (12 - pessoas)</option>
          </select>

          {formValues.Buggies * price > 0 ? (
            <p>Preço: {price * formValues.Buggies}€</p>
          ) : (
            <p>Preço: {price === "A combinar" ? "A Combinar" : price + "€"}</p>
          )}
          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default ModalReserve;
