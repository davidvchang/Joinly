import React from "react";
import SeachInput from "../components/SeachInput";
import Category from "../components/Category";
import BlogCard from "../components/BlogCard";
import Navegation from "../components/Navegation";

const Home: React.FC = () => {
  return (
    <section className="w-full flex flex-col p-10 gap-7">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Explore Events</h1>
        <span className="text-slate-600">
          Discover events that match your interests
        </span>
      </div>

      <SeachInput />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span>Categories</span>

          <div className="flex flex-wrap gap-2">
            <Category text="All" isSelected={true} />
            <Category text="Technology" />
            <Category text="Cultural" />
            <Category text="Economic" />
            <Category text="Bussiness" />
            <Category text="Music" />
            <Category text="Other" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
          <BlogCard title="Tech Conference 2025" category="Technology" date="Saturday, June 14, 2025" time="09:00 am" address="San Francisco, Convention" attend_number={10} />
        </div>

      </div>
      
      <div className="flex w-full items-center justify-center">
        <Navegation current_page={1} page={1} total_pages={2}/>
      </div>
    </section>
  );
};

export default Home;
