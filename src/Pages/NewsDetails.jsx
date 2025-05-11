import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/homelayouts/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsContent = newsDetails.find((singleNews) => singleNews.id == id);
    setNews(newsContent);
  }, [newsDetails, id]);
  return (
    <div className="w-11/12 mx-auto py-8 space-y-8">
      <header>
        <Header></Header>
      </header>
      <main
        className="grid grid-cols-12 gap-5
      "
      >
        <section className="col-span-9">
          <h3 className="font-bold ">Dragon News</h3>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
