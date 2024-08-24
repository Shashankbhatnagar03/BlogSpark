import { Blog } from "../hooks";
import { Avatar } from "../pages/BlogCard";
import Appbar from "./Appbar";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full  max-w-screen-lg pt-12">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">post on 2nd december 2021</div>
            <div className="pt-3">{blog.content}</div>
          </div>
          <div className=" col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  random catch aphar df asdf sdfa s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
