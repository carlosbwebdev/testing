import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/components/ModalReserve.module.css";
import { Data } from "../constants/PASSEIOS";
import { DataEN } from "../constants/PASSEIOS_ENG";
import { LanguageContext } from "../context/LanguageContext"; // Importar o contexto do idioma
import translations from "../utils/translations"; // Importar as traduções

const ModalReserve = ({ isOpen, closeModal, passeio }) => {
  const { language } = useContext(LanguageContext); // Consumir o contexto do idioma
  const {
    reserveNow,
    fillForm,
    name,
    email,
    phone,
    date,
    tour,
    selectTour,
    morning,
    afternoon,
    time,
    buggies,
    reserve,
    price,
    perPerson,
    toCombine,
  } = translations[language]; // Obter as traduções com base no idioma

  const data = language === "pt" ? Data : DataEN;

  const initialFormState = {
    Horario: "",
    Buggies: "",
    Passeio: passeio,
  };

  const [formValues, setFormValues] = useState(initialFormState);
  const [priceValue, setPriceValue] = useState(0);

  useEffect(() => {
    setFormValues((prevValues) => ({ ...prevValues, Passeio: passeio }));
  }, [passeio]);

  useEffect(() => {
    const selectedPasseio = formValues.Passeio;

    if (selectedPasseio === "Básico") {
      setPriceValue(35);
    } else if (
      selectedPasseio === "Por Maus Caminhos" ||
      selectedPasseio === "On Rough Paths"
    ) {
      setPriceValue(50);
    } else if (
      selectedPasseio === "Baloiço Do Mezio" ||
      selectedPasseio === "Mezio Swing"
    ) {
      setPriceValue(80);
    } else if (
      selectedPasseio === "Do Lima Ao Gião" ||
      selectedPasseio === "From Lima to Gião"
    ) {
      setPriceValue(110);
    } else if (
      selectedPasseio === "Longa Distância" ||
      selectedPasseio === "Long Distance"
    ) {
      setPriceValue(140);
    } else if (
      selectedPasseio === "O Dia Todo" ||
      selectedPasseio === "All Day"
    ) {
      setPriceValue(toCombine);
    }

    setFormValues((prevValues) => ({ ...prevValues, Buggies: "" }));
    setFormValues((prevValues) => ({ ...prevValues, Horario: "" }));
  }, [formValues.Passeio, toCombine]);

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
          <h1>{reserveNow}</h1>
          <p>{fillForm}</p>
        </div>
        <form action="https://formspree.io/f/mnqywvkb" method="POST">
          <input name="Nome" type="text" placeholder={name} required />
          <input name="Email" type="text" placeholder={email} required />
          <input name="Telemóvel" type="number" placeholder={phone} required />
          <label htmlFor="Data">{date}:</label>
          <input name="Data" type="date" placeholder={date} required />
          <label htmlFor="Passeio">{tour}</label>
          <select
            name="Passeio"
            value={formValues?.Passeio}
            onChange={handleChange}
            defaultValue
          >
            <option value="" defaultValue>
              {selectTour}
            </option>
            <option value={passeio}>{passeio}</option>
            {data?.map((item) => {
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
            value={formValues?.Horario}
            onChange={handleChange}
            defaultValue
          >
            <option value="">{time}</option>
            <option value={morning}>{morning}</option>
            <option value={afternoon}>{afternoon}</option>
          </select>
          <select
            name="Buggies"
            value={formValues?.Buggies}
            onChange={handleChange}
            defaultValue
          >
            <option value="" defaultValue>
              {buggies}
            </option>
            <option value="1">1 (2 - {perPerson})</option>
            <option value="2">2 (4 - {perPerson})</option>
            <option value="3">3 (6 - {perPerson})</option>
            <option value="4">4 (8 - {perPerson})</option>
            <option value="5">5 (10 - {perPerson})</option>
            <option value="6">6 (12 - {perPerson})</option>
          </select>
          {formValues.Buggies * priceValue > 0 ? (
            <p>
              {price}: {priceValue * formValues.Buggies}€
            </p>
          ) : (
            <p>
              {price}: {priceValue === toCombine ? toCombine : priceValue + "€"}
            </p>
          )}
          <button type="submit">{reserve}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalReserve;
