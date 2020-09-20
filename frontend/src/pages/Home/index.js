import React, { useState, useEffect, useRef } from "react";
import logoHelpper from './../../assets/logo-helper.png'
import "./index.css";
import api from "./../../service/api";

const Home = ({ match, history }) => {
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [propertiesToDelete, setPropertiesToDelete] = useState([]);
  const userArrayRef = useRef([]);

  // loading user info

  const formatUserInfo = (response) => {
    for (let key in response.data) {
      if (!userArrayRef.current.includes(key)) {
        if (
          key !== "_id" &&
          key !== "__v" &&
          response.data[key] &&
          userInfoArray.length < 10 
        ) {
          if (key === "name") {
            const property = {
              key: key,
              name: "Nome",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "cpfCnpj") {
            const property = {
              key: key,
              name: "CPF/CNPJ",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "email") {
            const property = {
              key: key,

              name: "E-mail",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "telephone") {
            const property = {
              key: key,
              name: "Telefone",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "cep") {
            const property = {
              key: key,
              name: "CEP",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "publicPlace") {
            const property = {
              key: key,
              name: "Logradouro",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "number") {
            const property = {
              key: key,
              name: "Número",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "neighborhood") {
            const property = {
              key: key,
              name: "Bairro",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "city") {
            const property = {
              key: key,
              name: "Cidade",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          } else if (key === "state") {
            const property = {
              key: key,
              name: "Estado",
              value: response.data[key],
            };
            userArrayRef.current.push(property);
          }
        }
      }
    }
    return userArrayRef.current
  };
  useEffect(() => {
    async function loadInfo() {
      const userId = localStorage.getItem("id");
      const response = await api.get("/user/" + userId);
      console.log(response.data.name);
      setUserInfoArray(formatUserInfo(response));
    }

    loadInfo();
  }, []);

  const handleCheck = async (e) => {
    if (e.target.checked) {
      if (
        propertiesToDelete.length <= 10 &&
        !propertiesToDelete.includes(e.target.id)
      ) {
        setPropertiesToDelete([...propertiesToDelete, e.target.id]);

      } 
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("id");
    const propertiesString = propertiesToDelete.join();

    const response = await api.patch("/" + id + "/delete", {
      propertiesToDelete: propertiesString,
    });
    console.log(response.data);

    document.location.reload();
  };
  return (
    <div className="container home-container">
      <div className="header">
        <img
          src={logoHelpper}
          onClick={(e) => history.push("/")}
        />
        <span
          onClick={(e) => history.push("/")}
        >
          Teste Helpper
        </span>
      </div>
      {userInfoArray.length > 0 ? (
        <div className="home-content">
          <h1 className="presentation">Seja Bem-Vindo(a)</h1>

          <div className="home-grid">
            {userInfoArray.map((field, index) => (
              <div className="home-field" key={index}>
                <span className="field-title">{field.name}:</span>
                <div className="checkbox-area">
                  <input
                    type="checkbox"
                    id={field.key}
                    onChange={(e) => {
                      handleCheck(e);
                    }}
                  />
                  <label htmlFor={field.key} className="field-value">
                    {field.value}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <button
            className="delete-button"
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Excluir
          </button>
        </div>
      ) : (
        <div className="end-container">
          <img src={logoHelpper} />
          <h1
            style={{
              color: "white",
              fontSize: "46px",
              textAlign: "center",
              marginTop: "15px",
            }}
            className="end-message"
          >
            FIM
          </h1>
        </div>
      )}

    </div>
  );
};

export default Home;
