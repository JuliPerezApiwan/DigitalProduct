// import React from "react";
// import styled from "styled-components";

// export default function TitleComponent() {
//     return (
//         <TitleWrapper>
//             <Title>Productos Digitales</Title>
//             <Subtitle>Para transformar tu potencial 🚀</Subtitle>
//         </TitleWrapper>
//     );
// }

// const TitleWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.5rem;
//   margin: 2rem;
//   margin-bottom:0rem;
//   border-radius: 5rem;
//   border-bottom: 2px solid black;
// `;

// const Title = styled.h1`
//   font-family: "Ranchers", sans-serif;
//   font-size: 5em;
//   color: azure;
//   margin: 0.5rem;
//   background: linear-gradient(45deg, #FF6B6B, #FFD93D);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const Subtitle = styled.p`
//   font-family: "Roboto Condensed", sans-serif;
//   font-size: 1.5em;
//   color: coral;
//   margin-top: -0.5rem;
// `;

import React from "react";
import styled from "styled-components";

export default function TitleComponent() {
    return (
        <TitleWrapper>
            <Title>Productos Digitales</Title>
            <Subtitle>Para transformar tu potencial 🚀</Subtitle>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin: 2rem;
  margin-bottom: -3rem;
  border-radius: 5rem;
  border-bottom: 2px solid black;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 0.25rem;
    margin-bottom: -2rem;

  }
`;

const Title = styled.h1`
  font-family: "Ranchers", sans-serif;
  font-size: 5em;
  color: azure;
  margin: 0.5rem;
  background: linear-gradient(45deg, #FF6B6B, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5em;
  color: coral;
  margin-top: -0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;
