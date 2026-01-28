import { Link } from "react-router-dom";
import "../assets/css/blog.css";

import blog1 from "../assets/images/image_1.jpg";
import blog2 from "../assets/images/image_2.jpg";
import blog3 from "../assets/images/image_3.jpg";

const blogs = [
  {
    id: 1,
    img: blog1,
    date: "July 03, 2020",
    author: "Admin",
    comments: 3,
    title: "Why Lead Generation is Key for Business Growth",
  },
  {
    id: 2,
    img: blog2,
    date: "July 03, 2020",
    author: "Admin",
    comments: 3,
    title: "Why Lead Generation is Key for Business Growth",
  },
  {
    id: 3,
    img: blog3,
    date: "July 03, 2020",
    author: "Admin",
    comments: 3,
    title: "Why Lead Generation is Key for Business Growth",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <span className="blog-tag">BLOG</span>
      <h2 className="blog-title">Our Blog</h2>
      <p className="blog-desc">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="blog-grid">
        {blogs.map((item) => (
          <div className="blog-card" key={item.id}>
            <Link to={`/blog/${item.id}`}>
              <img src={item.img} alt={item.title} />
            </Link>

            <div className="blog-content">
              <span className="blog-meta">
                {item.date} &nbsp; {item.author} &nbsp; {item.comments}
              </span>

              <Link to={`/blog/${item.id}`} className="blog-link">
                {item.title}
              </Link>

              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
