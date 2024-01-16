import { useEffect, useState } from "react";
import axios from "axios";
import {
  Mers,
  Auddi,
  BMW,
  ferrari,
  hundai,
  lamborghini,
  Nissan,
  Sevishganlar,
} from "../../../public/images";
import "./Main.scss";
import MainLeft from "./MainLeft";
import Search from "../search/Search";

const Main = () => {
  const [news, setNews] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/news");
      const data = await res.data;
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/news?id=${id}`);
      const data = await res.data;
      setPosts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <div className="container main-container">
        <div className="	main-1">
          <Search />
          {posts.map((post) => (
            <MainLeft key={post.id} post={post} />
          ))}
        </div>
        <div className="news-cards main-1">
          {news.map((post) => (
            <div
              key={post.id}
              onClick={() => getPostDetails(post.id)}
              className="news-card"
            >
              <img src={post.image} alt="" />
              <h6>{post.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
