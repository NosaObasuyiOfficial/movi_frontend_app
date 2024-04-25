import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-modal";
import { specific_movie } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { tv_series } from "../utils/movies_section";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function TVSeries() {
  const [modalIsOpen, setIsOpen] = useState(false);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch() as unknown as any;

  function closeModal() {
    setIsOpen(false);
  }

  async function handleImageClick(img: { imdbID: string }) {
    await dispatch(specific_movie(img.imdbID));

    setIsOpen(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const movie_object = useSelector((state: any) => state.specific_movie);

  return (
    <>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {tv_series.map((img) => {
            return (
              <SwiperSlide key={img.imdbID}>
                <img
                  src={img.Poster}
                  alt="image slider"
                  onClick={() => {
                    handleImageClick(img);
                  }}
                />
              </SwiperSlide>
            );
          })}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
            <MdKeyboardArrowLeft className="arrow-back-outline"/>
            </div>
            <div className="swiper-button-next slider-arrow">
            <MdKeyboardArrowRight  className="arrow-back-outline"/>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalClassName mx-auto eight_h_screen:w-[400px] four_h_screen:w-[250px] focus:outline-none"
        overlayClassName="overlayClassName"
      >
        {movie_object && (
          <div className="w-[800px] h-[370px] eight_h_screen:w-[400px] four_h_screen:w-[250px]" onClick={() => setIsOpen(false)}>
            <div className="relative w-[800px] h-[370px] flex flex-col justify-start eight_h_screen:w-[400px] four_h_screen:w-[250px]">
              <img
                className="w-[800px] h-[370px] brightness-50"
                src={movie_object.Poster}
              />

              <div className="absolute inset-0 font-movi_font_thre top-[15px] left-[15px]">
                <p className="bg-red-600 w-[40px] flex items-center justify-center text-[12px] rounded-[5px]">
                  {movie_object.Rated}
                </p>
              </div>
              <div className="absolute inset-0 content-end pb-[10px] px-[20px] font-movi_font_three text-white/100">
                <p className="text-[30px] pb-[20px] four_h_screen:text-[22px]">{movie_object.Title}</p>
                <p className="text-[14px] pb-[10px]">{movie_object.Plot}</p>
                <div className="w-[30px] h-[20px] flex flex-nowrap gap-[5px] justify-start font-movi_font_three">
                  <p className="bg-yellow-300 h-[15px] text-[12px] text-black/100 text-center rounded-[2px]">
                    imdb
                  </p>
                  <p className="text-[13px] text-red-500 font-extrabold">
                    {movie_object.imdbRating}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center px-[20px] w-[800px] h-[35px] eight_h_screen:w-[400px] four_h_screen:w-[250px]">
              <p className="w-[90px] text-[14px] text-movi_green">
                Release date:
              </p>
              <p className="text-[12px] w-[260px] flex justify-center four_h_screen:w-[250px]">
                {movie_object.Released}
              </p>
            </div>

            <div className="w-[800px] h-[95px] grid grid-cols-2 content-around justify-center items-center px-[20px] py-[10px] eight_h_screen:grid-cols-1">
              <div className="w-[350px] h-1/3 text-center flex gap-[5px] flex-nowrap justify-start items-center">
                <p className="w-[60px] text-[14px] text-movi_green">
                  Duration:
                </p>
                <p className="text-[12px] w-[290px] flex justify-start">
                  {movie_object.Runtime}
                </p>
              </div>

              <div className="w-[350px] h-1/3 text-center flex gap-[5px] flex-nowrap justify-start items-center">
                <p className="w-[45px] h-[20px] text-[14px] mt-[-3px] text-movi_green">
                  Genre:
                </p>
                <p className="text-[12px] h-[20px] w-[300px] flex justify-start">
                  {movie_object.Genre}
                </p>
              </div>

              <div className="w-[350px] h-1/3 text-center flex gap-[5px] flex-nowrap justify-start items-center eight_h_screen:hidden">
                <p className="w-[55px] text-[14px] text-movi_green">Country:</p>
                <p className="text-[12px] w-[295px] flex justify-start">
                  {movie_object.Country}
                </p>
              </div>

              <div className="w-[350px] h-1/3 text-center flex gap-[5px] flex-nowrap justify-start items-center four_h_screen:w-[200px]">
                <p className="w-[40px] h-[20px] text-[14px] mt-[-3px] text-movi_green">
                  Casts:
                </p>
                <p className="text-[12px] h-[20px] w-[360px] flex justify-start">
                  {movie_object.Actors}
                </p>
              </div>

              <div className="w-[350px] h-1/3 text-center flex gap-[5px] flex-nowrap justify-start items-center eight_h_screen:hidden">
                <p className="w-[68px] h-[20px] text-[14px] mt-[-3px] text-movi_green">
                  Language:
                </p>
                <p className="text-[12px] h-[20px] w-[360px] flex justify-start">
                  {movie_object.Language}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default TVSeries