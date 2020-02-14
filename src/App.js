import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Original Surfer', cursive;
  }
`;
function App() {
  return (
    <>
      <h1>Zeros Surf Subs</h1>
      <GlobalStyle />
      <div>Hello Zero subs</div>
    </>
  );
}

export default App;
