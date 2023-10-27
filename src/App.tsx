// import React, { useState } from 'react'
// import styled from '@emotion/styled/macro'

import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-container">
        {/* ------------------------------------------ */}
        {/* The lines between ------------ signs should be removed */}
        <div className="welcome-container">
          <h1>
            Welcome to the First Round of the Frontend Developer Interview!
          </h1>
          <p>
            We're excited to have you here and showcase your frontend
            development skills in this initial round.
          </p>
          <p>
            Your task today is to transform the Figma design provided into a
            React component.
          </p>
          <p>
            Take your time, and don't hesitate to ask questions if you need any
            clarifications during the process.
          </p>
          <p>
            There will be a final round to follow, so do your best to
            demonstrate your skills today.
          </p>
          <p>Best of luck, and let's get started!</p>
        </div>
        {/* -------------------------------------------------- */}
      </div>
    </div>
  );
}

export default App;
