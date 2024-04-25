import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { all_movies_searched, get_all_queries, search } from "../redux/action"; 
import ClipLoader from "react-spinners/ClipLoader";

function MoviesSearchBox() {

  const [text, setText] = useState("");
  const [listShow, setListShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);

  /*---------Calling useSelector and useDispatch*-------------*/

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch() as unknown as any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const isLoading = useSelector((state:any) => state.loading);

  
  /*---------Calling useSelector and useDispatch*-------------*/

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function handleChange(event: any) {
      setText(event.target.value);
    }
  
  async function searchQueries() {
    await dispatch(get_all_queries())
    
    if (text.length < 1) {
      setListShow(true);
    }
  }
  
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const text_series: any[]  = useSelector((state:any) => state.all_queries)
  
  /*--------------Handling Movies Searching-------------- */
  async function handleSearchMovie (){
    setLoading(true);
    const search_query = { movie: text };

    await dispatch(search(search_query));

    const movie_details = {
      movie: text,
      page: 1
    };

   await dispatch(all_movies_searched(movie_details));

    const search_proceed = localStorage.getItem("searched_movie");

    if (search_proceed === "Queries has been updated.") {
      localStorage.setItem("login_proceed", "you have logged-in successfully");
      setLoading(false);
    }


  }


  /*--------------Handling Movies Searching-------------- */

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !(ref.current as HTMLElement).contains(event.target)) {
        setListShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  function handleListItemClick(value: any) {
    setText(value);
  }




  return (
    <div className=" flex flex-col justify-end w-full pr-[20px] pb-[20px]">
      <div className="flex items-center justify-end">
        <div className="h-[30px] w-[600px] six_h_screen:w-[400px] five_h_screen:w-[300px] four_h_screen:w-[230px] three_h_screen:w-[180px]">
          <input
            className="h-[30px] w-[600px] border-movi_green border-[2px] rounded-tl-[10px] rounded-bl-[10px] pl-[10px] text-black/100 focus:outline-none six_h_screen:w-[400px] five_h_screen:w-[300px] four_h_screen:w-[230px] three_h_screen:w-[180px]"
            placeholder="search for your favourite movie"
            onClick={searchQueries}
            type="text"
            onChange={handleChange}
            value={text}
          />
        </div>

        <div className="w-[50px] h-[30px] flex items-center justify-center bg-movi_green rounded-br-[10px] rounded-tr-[10px] cursor-pointer hover:bg-green-950 group" onClick = {handleSearchMovie}>
          {loading ? 
                    <ClipLoader
                    color={"#FDF5F5"}
                    loading={true}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  :
          <FaSearch className="text-white/100 text-[20px] group-hover:text-movi_green" />}
        </div>
      </div>

      <div className="flex pr-[50px] justify-end">
        <div ref={ref} className="w-[594px] bg-green-950">
          {listShow &&
            text.length < 1 &&
            text_series.map((value, i) => {
              return (
                <div key={i} onClick={() => handleListItemClick(value)}>
                  <p className="font-movi_font_three cursor-pointer hover:bg-movi_green pl-[10px]">
                    {value}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

    </div>
  );
}

export default MoviesSearchBox;

