import React from "react";
import backgroundImage from './assets/bgspotlight.png';
// fuctional comopnent for creating blog posts uses props to display date, title and description of the blog post
// SVG's are used for the read more button
const BlogPost = ({ date, title, description }) => (
  <div className="pt-6 pb-4 space-y-2 font-retro text-2xl">
    <span>{date}</span>
    <h1 className="text-3xl font-bold font-retro">{title}</h1>
    <p>{description}</p>
    <a
      href="#"
      className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
    >
      <span>Read more</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  </div>
);
// A blog page with a blog post and a background image
// The blog post is created using the BlogPost component
function Blogs() {
  return (
    <div className="dark:bg-black dark:text-gray-50 min-h-screen">
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-11 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto"
          style={{
            backgroundImage:
              `url(${backgroundImage})`,
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "fit",
          }}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center font-retro text-3xl">
            <span>12 June</span>
            <h1 className="py-4 text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-700">
          <BlogPost
            date="2 March"
            title="Lorem ipsum dolor sit."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!"
          />
          <BlogPost
            date="2 march"
            title="Lorem ipsum dolor sit."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!"
          />
          <BlogPost
            date="2 March"
            title="Lorem ipsum dolor sit."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!"
          />
          <BlogPost
            date="2 March"
            title="Lorem ipsum dolor sit."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
