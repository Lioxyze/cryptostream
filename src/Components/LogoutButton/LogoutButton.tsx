"use client";
import React from "react";

export const LogoutButton = () => {
  const handleLogout = () => {
    // Efface le stockage local
    localStorage.clear();

    // Redirige vers la page de connexion
    window.location.href = "auth/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    >
      Déconnexion
    </button>
  );
};

export default LogoutButton;
