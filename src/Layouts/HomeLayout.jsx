import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <aside></aside>
        <section>
          <Outlet></Outlet>
        </section>
        <aside></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
