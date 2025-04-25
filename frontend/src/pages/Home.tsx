import React, { useEffect, useState } from "react";
import SeachInput from "../components/SeachInput";
import Category from "../components/Category";
import BlogCard from "../components/BlogCard";
import Navegation from "../components/Navegation";
import BtnNavBar from "../components/BtnNavBar";
import { format,  } from "@formkit/tempo"

import {getAllEvents} from '../services/eventsServices'
import {Events} from '../types/interfaces'

const Home: React.FC = () => {
  const [valueToken, setValueToken] = useState<string | null>(null)
  const [events, setEvents] = useState<Events[]>([])
  const [searchInput, setSearchInput] = useState<string>("")

  const getEvents = async () => {
    const data = await getAllEvents()
    setEvents(data)
  }

  const getUniqueCategory = () => {
    const categories = events.map((event) => event.category);
    return [...new Set(categories)];
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    setValueToken(token)
    getEvents()
  }, [])

  return (
    <section className="w-full h-full flex flex-col flex-grow p-10 gap-7">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Explore Events</h1>
        <span className="text-slate-600">
          Discover events that match your interests
        </span>
      </div>


      <div className="flex items-center justify-between">
        <SeachInput value={searchInput} onchange={(e) => setSearchInput(e.target.value)}/>

        {valueToken && (
          <BtnNavBar text="Create Event" link="/create-event"/>
        )}
      </div>


      <div className="flex flex-col gap-10 flex-grow">
        <div className="flex flex-col gap-3">
          <span>Categories</span>

          <div className="flex flex-wrap gap-2">
            <Category text="All" isSelected={true} />
            {getUniqueCategory().map((category, index) => {
              return <Category key={index} text={category} />
            })}
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
          {events.length > 0 ? (
            events.filter((e) => e.title.toLowerCase().includes(searchInput.toLowerCase()))
            .map((event) => {
                const formattedTime = event.time.slice(0, 5);
                const timeWithDate = `1970-01-01T${formattedTime}:00`;
                
                return <BlogCard key={event.id_event} link={`/event/${event.id_event}`} image_url={event.image_url} title={event.title} category={event.category} date={format(event.date, { date: "medium" })} time={format(timeWithDate, { time: "short" })} address={event.location} attend_number={10} />
            })
          ) : (
            <p className="col-span-full text-center text-lg py-10 text-gray-500 flex items-center justify-center">
              No events available
            </p>
          )}
        </div>

      </div>
      
      <div className="flex w-full items-center justify-center mt-auto">
        <Navegation current_page={1} page={1} total_pages={2}/>
      </div>
    </section>
  );
};

export default Home;
