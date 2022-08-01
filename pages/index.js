import Head from "next/head";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
	 color: ${(props) => props.color};
 }
`;
const Container = styled.div`
  text-align: center;
`;
export default function Home() {
  const [color, setColor] = useState("deeppink");

  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle color={color} />
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}