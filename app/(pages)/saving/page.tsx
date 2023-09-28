"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/navbar-login";
import { Button } from "@/components/ui/button";

const SavingsPage = () => {
  // State untuk saldo tabungan
  const [savingsBalance, setSavingsBalance] = useState(500000); // Contoh saldo awal

  // Fungsi untuk menambah tabungan
  const depositSavings = (amount) => {
    // Logika penambahan tabungan
    setSavingsBalance(savingsBalance + amount);
  };

  // Fungsi untuk menarik tabungan
  const withdrawSavings = (amount) => {
    // Pastikan saldo cukup sebelum penarikan
    if (savingsBalance >= amount) {
      // Logika penarikan tabungan
      setSavingsBalance(savingsBalance - amount);
    } else {
      alert("Saldo tidak mencukupi");
    }
  };

  return (
    <main className="flex min-h-screen w-full">
      {/* Background */}
      <img
        src="/assets/background.png"
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen"
        draggable="false"
      />

      {/* Navbar */}
      <Navbar />

      {/* Savings Page */}
      <div className="flex flex-col items-center justify-center w-full h-screen text-white z-20">
        <h1 className="font-riffic text-4xl">Tabungan</h1>
        <div className="font-poppins text-lg">
          Saldo Tabungan: Rp {savingsBalance.toLocaleString("id-ID")}
        </div>
        <div className="flex space-x-4 mt-4">
          <Button onClick={() => depositSavings(100000)}>Menabung 100000</Button>
          <Button onClick={() => withdrawSavings(50000)}>Menarik 50000</Button>
        </div>
        {/* Tambahkan komponen-komponen lain untuk histori transaksi, grafik, dll. */}
      </div>
    </main>
  );
};

export default SavingsPage;
