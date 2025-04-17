import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div style={{
      display: "flex", justifyContent: "center",
      alignItems: "center", height: "100vh",
      background: "#f0f4f8"
    }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "white", padding: "2rem",
          borderRadius: "1rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          width: "300px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Iniciar Sesión</h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label>Usuario</label>
            <input type="text" placeholder="Ingresa tu usuario"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }} />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }} />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "100%", padding: "0.75rem",
              border: "none", borderRadius: "0.5rem",
              backgroundColor: "#007bff", color: "white",
              fontWeight: "bold"
            }}
          >
            Entrar
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
