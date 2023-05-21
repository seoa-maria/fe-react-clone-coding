// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Header from "./component/header";
import Bottom from "./component/bottom";
import Footer from "./component/footer";
import styled from "styled-components";
import Card from "./component/card";

function App() {
  return (
    <>
      <Header />
      <Bottom></Bottom>
      <Card></Card>
      <Footer />
    </>
  );
}

export default App;
