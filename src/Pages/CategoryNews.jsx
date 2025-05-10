import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SingleNewsCard from "../Components/homelayouts/SingleNewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setcategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setcategoryNews(newsData);
      return;
    } else if (id == "1") {
      const filterNews = newsData.filter(
        (news) => news.others.is_today_pick === true
      );
      setcategoryNews(filterNews);
      return;
    } else {
      const filterNews = newsData.filter((news) => news.category_id == id);
      setcategoryNews(filterNews);
    }
  }, [newsData, id]);

  return (
    <div>
      <h3 className="font-bold mb-5">Dragon News Home</h3>
      <div className="grid grid-cols-1 gap-8">
        {categoryNews.map((news) => (
          <SingleNewsCard key={news.id} news={news}></SingleNewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
