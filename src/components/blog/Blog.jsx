import cox from "../../assets/coxbazar.jpg";
import sajek from "../../assets/sajek.jpg";
import sylhet from "../../assets/img_2.png";
import "./blog.css";
import SingleBlog from "./SingleBlog";
import { useGetLimitedBlogsQuery } from "../../feature/blog/blogApi";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data: blogs, isLoading, isError } = useGetLimitedBlogsQuery();

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && blogs?.length === 0) {
    content = <div>There was no BLog Available</div>;
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <SingleBlog blog={blog} />);
  }

  return (
    <section className="w-10/12 py-20 m-auto ">
      <div className="text-centers ">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Most Popular Blogs</h1>
      </div>
      <div className="grid grid-cols-3  row-auto justify-items-center gap-y-12 pt-20">{content}</div>

      <div className="mt-12 flex justify-center items-center">
        <Link to="/blogs" className="bg-[#FFCE0C] text-slate-100 px-6 py-2 rounded" href="#">
          More
        </Link>
      </div>
    </section>
  );
};

export default Blog;
