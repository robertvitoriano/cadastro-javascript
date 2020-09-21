import React, { useState } from "react";
import { mask, unMask } from "remask";
import "./index.css";
import api from "./../../service/api";

const Register = ({ match, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cep, setCep] = useState("");
  const [publicPlace, setPublicPlace] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/users", {
      name: name,
      email: email,
      cpfCnpj: cpfCnpj,
      telephone: telephone,
      cep: cep,
      publicPlace: publicPlace,
      number: number,
      neighborhood: neighborhood,
      city: city,
      state: state,
    });
    console.log(response)
    if (response.status !== 201) {
      setErrorMessage(response.data.msg)
    } else {
      localStorage.setItem("id", response.data._id);
      history.push("/home");
    }
  };

  return (
    <div className="register-container container">
      <h1
        className="title-message"
      >
        Insira seus dados abaixo
      </h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          placeholder="Digite seu nome"
          className="register-input"
          value={name}
          onChange={(e) => {
            if (!Number(e.target.value)) {
              setName(e.target.value);
            }
          }}
          type="text"
        />
        <input
          placeholder="Digite seu e-mail"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          placeholder="Digite seu CPF ou CNPJ"
          className="register-input"
          value={cpfCnpj}
          onChange={(e) =>
            setCpfCnpj(
              mask(unMask(e.target.value), [
                "999.999.999-99",
                "99.999.999/9999-99",
              ])
            )
          }
          type="text"
        />
        <input
          placeholder="Digite seu telefone"
          className="register-input"
          value={telephone}
          onChange={(e) =>
            setTelephone(
              mask(unMask(e.target.value), [
                "(99) 9999-9999",
                "(99) 99999-9999",
                "(999) 9999-9999",
                "(999) 99999-999",
              ])
            )
          }
          type="text"
        />

        <input
          placeholder="CEP"
          className="register-input"
          value={cep}
          onChange={(e) => setCep(mask(unMask(e.target.value), ["99999-999"]))}
          type="text"
        />
        <input
          placeholder="logradouro"
          className="register-input"
          value={publicPlace}
          onChange={(e) => {
            if (!Number(e.target.value)) {
              setPublicPlace(e.target.value);
            }
          }}
          type="text"
        />
        <input
          placeholder="Digite seu número"
          className="register-input"
          value={number}
          onChange={(e) =>
            setNumber(mask(unMask(e.target.value), ["99999999"]))
          }
          type="text"
        />
        <input
          placeholder="Digite seu Bairro"
          className="register-input"
          value={neighborhood}
          onChange={(e) => {
            if (!Number(e.target.value)) {
              setNeighborhood(e.target.value);
            }
          }}
          type="text"
        />
        <input
          placeholder="Digite sua Cidade"
          className="register-input"
          value={city}
          onChange={(e) => {
            if (!Number(e.target.value)) {
              setCity(e.target.value);
            }
          }}
          type="text"
        />
        <input
          placeholder="Digite seu Estado"
          className="register-input"
          value={state}
          onChange={(e) => {
            if (!Number(e.target.value)) {
              setState(e.target.value);
            }
          }}
          type="text"
        />

        <button className="register-button">
          Registrar
        </button>
      </form>
      {errorMessage?(
      <div className="error-modal">
        <span>{errorMessage}</span>
        <button onClick={e=>setErrorMessage('')}>Fechar</button>
      </div>
      ):''}
           {errorMessage ?( <div className="translucent"></div>):''}
    </div>
  );
};
export default Register;
