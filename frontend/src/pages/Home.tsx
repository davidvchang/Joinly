import React, { useEffect, useState } from "react";
import SeachInput from "../components/SeachInput";
import Category from "../components/Category";
import BlogCard from "../components/BlogCard";
import Navegation from "../components/Navegation";
import BtnNavBar from "../components/BtnNavBar";
import { format,  } from "@formkit/tempo"

import {getAllEvents} from '../services/eventsServices'
import {verifyIsLoggedUser} from '../services/usersServices'
import { getAttendees } from "../services/attendeesServices";
import {Events, Attendees} from '../types/interfaces'

const Home: React.FC = () => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)
  const [events, setEvents] = useState<Events[]>([])
  const [searchInput, setSearchInput] = useState<string>("")
  const [isSelectedCategory, setIsSelectedCategory] = useState<string | null >(null)
  const [attend, setAttend] = useState<Attendees[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  

  const getEvents = async (page = 1) => {
    const data = await getAllEvents(page, 9)
    setEvents(data.data)
    setTotalPages(Math.ceil(data.total / data.limit));
    setCurrentPage(data.page);
  }

  const getAttend = async () => {
      const data = await getAttendees()
      setAttend(data)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const getUniqueCategory = () => {
    const categories = events.map((event) => event.category);
    return [...new Set(categories)];
  }

  const verifyUserIsLogged = async () => {
    const data = await verifyIsLoggedUser()

    if(data.message === "Authenticated") {
      setUserIsLogged(true)
    }else {
      setUserIsLogged(false);
    }
  }

  useEffect(() => {
    verifyUserIsLogged()
    getAttend()
  }, [])
  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage]);

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

        {userIsLogged && (
          <BtnNavBar text="Create Event" link="/create-event"/>
        )}
      </div>


      <div className="flex flex-col gap-10 flex-grow">
        <div className="flex flex-col gap-3">
          <span>Categories</span>

          <div className="flex flex-wrap gap-2">
            <Category text="All" isSelected={isSelectedCategory === null} onclick={() => setIsSelectedCategory(null)}/>
            {getUniqueCategory().map((category, index) => {
              return <Category key={index} text={category} isSelected={isSelectedCategory === category} onclick={() => setIsSelectedCategory(category)} />
            })}
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
          {events.length > 0 ? (
            events.filter((e) => e.title.toLowerCase().includes(searchInput.toLowerCase()))
            .filter((e) => isSelectedCategory === null || e.category === isSelectedCategory)
            .map((event) => {
                const formattedTime = event.time.slice(0, 5);
                const timeWithDate = `1970-01-01T${formattedTime}:00`;
                const dataAttend = attend.filter((att) => (
                  events.filter((e) => e.id_event === att.event_id)
                ))
                
                return <BlogCard key={event.id_event} link={`/event/${event.id_event}`} image_url={event.image_url} title={event.title} category={event.category} date={format(event.date, { date: "medium" })} time={format(timeWithDate, { time: "short" })} address={event.location} attend_number={(dataAttend.filter((att) => att.event_id === event.id_event)).length} />
            })
          ) : (
            <p className="col-span-full text-center text-lg py-10 text-gray-500 flex items-center justify-center">
              No events available
            </p>
          )}
        </div>

      </div>
      
      <div className="flex w-full items-center justify-center mt-auto">
        <Navegation current_page={currentPage} onclick_previous_page={handlePreviousPage} page={currentPage} onclick_next_page={handleNextPage} total_pages={totalPages}/>
      </div>
    </section>
  );
};

export default Home;
