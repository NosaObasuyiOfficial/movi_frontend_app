import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import movi_logo from "../assets/images/movi_logo.png";
import MoviesSearchBox from "../components/MoviesSearchBox";
import Typed from "typed.js";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import RomanticComedy from "../components/RomanticComedy";
import ActionMovies from "../components/ActionMovies";
import TVSeries from "../components/TVSeries";
import { specific_movie } from "../redux/action";
import Cartoons from "../components/Cartoons";

interface OBJ_MOVII {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface OBJ_MOVI {
  Search: OBJ_MOVII[];
  totalResults: string;
  Response: true;
}

function MoviDashboard() {
  // const [ showSearchResults, setshowSearchResults] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: OBJ_MOVI = useSelector((state: any) => state.all_movies);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch() as unknown as any;

  /*-------------------Incoming Movies-----------------------------*/
  const obj_movi: OBJ_MOVII[] = response.Search;

  /*-------------------Incoming Movies-----------------------------*/

  function closeModal() {
    setIsOpen(false);
  }

  async function handleImageClick(img: { imdbID: string }) {
    await dispatch(specific_movie(img.imdbID));

    setIsOpen(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const movie_object = useSelector((state: any) => state.specific_movie);
  /*--------auto typing message*----------------*/
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Its MOVI time..."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  /*--------auto typing message*----------------*/

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className="flex-grow pb-[50px]">
          <Header />
          {!obj_movi ? (
            <div className="flex-col relative">
              <div>
                <p className="pl-[20px] font-movi_font_three text-[30px] capitalize pt-[50px] text-movi_green">
                  top movies to watch
                </p>
                <div className="mt-[30px]">
                  <ImageSlider />
                </div>

                <p className="pl-[20px] font-movi_font_three text-[30px] capitalize text-movi_green">
                  Romantic Comedy
                </p>
                <div className="mt-[-40px]">
                  <RomanticComedy />
                </div>

                <p className="pl-[20px] font-movi_font_three text-[30px] capitalize text-movi_green">
                  Action Movies
                </p>
                <div className="mt-[-40px]">
                  <ActionMovies />
                </div>

                <p className="pl-[20px] font-movi_font_three text-[30px] capitalize text-movi_green">
                  Popular Cartoons
                </p>
                <div className="mt-[-40px]">
                  <Cartoons />
                </div>

                <p className="pl-[20px] font-movi_font_three text-[30px] capitalize text-movi_green">
                  TV Series
                </p>
                <div className="mt-[-40px]">
                  <TVSeries />
                </div>
              </div>

              <div className="absolute inset-0">
                <MoviesSearchBox />
              </div>
            </div>
          ) : (
            <div>
              <p className="px-[20px] text-[30px] text-white/100 font-movi_font_three">
                Search results
              </p>

              <div className="flex gap-[20px] flex-wrap justify-center px-[20px] pt-[60px]">
                {obj_movi.length > 0 ? (
                  obj_movi.map((movie) => {
                    if (movie.Title.length >= 22) {
                      const cutting_text = movie.Title.split("")
                        .slice(0, 17)
                        .join("");
                      const cut_text = `${cutting_text}...`;

                      return (
                        <div
                          className="relative h-[300px] border-white/25 border-[2px] w-[200px] rounded-[10px] group cursor-pointer font-movi_font_three"
                          key={movie.imdbID}
                          onClick={() => handleImageClick(movie)}
                        >
                          <img
                            className="h-[246px] w-[200px] rounded-tr-[10px] rounded-tl-[10px] group-hover:brightness-50"
                            src={movie.Poster}
                          />

                          <p className="pt-[2px] text-[16px] px-[5px] font-movi_font_three text-white/100">
                            {cut_text}
                          </p>
                          <div className="flex px-[5px]">
                            <p className="text-[14px] text-white/100 w-[150px]">
                              {movie.Year}
                            </p>
                            <div className="flex items-center justify-end w-[50px]">
                              <p className="w-[50px] text-center text-[12px] rounded-[5px] backdrop-blur-[5px] bg-white/20  text-white/100">
                                {movie.Type}
                              </p>
                            </div>
                          </div>

                          <div className="absolute top-0 left-0 pl-[5px] pt-[5px] flex justify-center w-[20px]">
                            <p className="bg-white/75 w-[20px] text-black/100 text-xs px-[2px] rounded">
                              HD
                            </p>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        className="relative h-[300px] border-white/25 border-[2px] w-[200px] rounded-[10px] group cursor-pointer font-movi_font_three"
                        key={movie.imdbID}
                        onClick={() => handleImageClick(movie)}
                      >
                        <img
                          className="h-[246px] w-[200px] rounded-tr-[10px] rounded-tl-[10px] group-hover:brightness-50"
                          src={movie.Poster}
                        />

                        <p className="pt-[2px] text-[16px] px-[5px] font-movi_font_three text-white/100">
                          {movie.Title}
                        </p>
                        <div className="flex px-[5px]">
                          <p className="text-[14px] text-white/100 w-[150px]">
                            {movie.Year}
                          </p>
                          <div className="flex items-center justify-end w-[50px]">
                            <p className="w-[50px] text-center text-[12px] rounded-[5px] backdrop-blur-[5px] bg-white/20  text-white/100">
                              {movie.Type}
                            </p>
                          </div>
                        </div>

                        <div className="absolute top-0 left-0 pl-[5px] pt-[5px] flex justify-end w-[20px]">
                          <p className="bg-white/75 w-[20px] text-black/100 text-xs px-[2px] rounded">
                            HD
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>SORRY! There are no results for your search.</p>
                )}
              </div>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 bg-black bg-opacity-50 pb-[20px] w-[800px] h-[500px] mx-auto my-auto focus:outline-none eight_h_screen:w-[400px] four_h_screen:w-[250px]"
                overlayClassName="fixed inset-0 bg-black/95"
              >
                {movie_object && (
                  <div className="w-[800px] h-[370px] eight_h_screen:w-[400px] four_h_screen:w-[250px]" onClick={() => setIsOpen(false)}>
                    <div className="relative w-[800px] h-[370px] flex flex-col justify-start eight_h_screen:w-[400px] four_h_screen:w-[250px]">
                      <img
                        className="w-[800px] h-[370px] brightness-1"
                        src={movie_object.Poster}
                      />

                      <div className="absolute inset-0 font-movi_font_thre top-[15px] left-[15px]">
                        <p className="bg-red-600 w-[40px] flex items-center justify-center text-[12px] rounded-[5px]">
                          {movie_object.Rated}
                        </p>
                      </div>
                      <div className="absolute inset-0 content-end pb-[10px] px-[20px] font-movi_font_three text-white/100">
                        <p className="text-[30px] pb-[20px] four_h_screen:text-[22px]">
                          {movie_object.Title}
                        </p>
                        <p className="text-[14px] pb-[10px]">
                          {movie_object.Plot}
                        </p>
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
                        <p className="w-[55px] text-[14px] text-movi_green">
                          Country:
                        </p>
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
            </div>
          )}
        </div>
        <div className="h-[100px] bg-green-950 backdrop-blur-[5px] flex flex-col items-center justify-center">
          <img className="w-[100px]" src={movi_logo} alt="movi logo" />
          <p className="text-white/100 text-center font-movi_font_three">
            HEY<span className="text-red-600 text-[18px]">!! </span>
            <span className="text-white/100" ref={el} />
          </p>
        </div>
      </div>
    </>
  );
}

export default MoviDashboard;
