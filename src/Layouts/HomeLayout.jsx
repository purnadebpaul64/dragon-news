import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homelayouts/LeftAside";
import RightAside from "../Components/homelayouts/RightAside";
import Loading from "../Components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="w-11/12 mx-auto">
      <header className="py-6 space-y-5">
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6">
        <aside className="col-span-3 h-fit sticky top-0">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-0 h-8/12">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
