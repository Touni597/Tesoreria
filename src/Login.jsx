import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/menu");
      } else {
        setError(data.detail || "Error desconocido");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
    }}>
      <h1 style={{ color: "white", marginBottom: "2rem", fontWeight: "bold", fontSize: "2.2rem" }}>
        Sistema Tesorería
      </h1>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          width: "320px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", fontWeight: "bold" }}>
          Iniciar Sesión
        </h2>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Usuario</label>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required placeholder="Ingresa tu usuario"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              width: "100%", padding: "0.75rem", border: "none", borderRadius: "0.5rem",
              backgroundColor: "#007bff", color: "white", fontWeight: "bold", marginTop: "0.5rem"
            }}
          >
            Entrar
          </motion.button>
        </form>

        {error && <p style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>{error}</p>}

        <div style={{ textAlign: "center", marginTop: "1.2rem", fontSize: "0.9rem" }}>
          <a href="#" style={{ color: "#007bff", textDecoration: "none", marginRight: "1rem" }}>
            ¿Olvidaste tu contraseña?
          </a>
          <br />
          <a href="#" style={{ color: "#28a745", textDecoration: "none" }}>
            Crear cuenta nueva
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
