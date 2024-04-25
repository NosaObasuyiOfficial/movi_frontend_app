import { useState } from "react";
import { useDispatch } from "react-redux";
import { login_user } from "../redux/action";
import ClipLoader from "react-spinners/ClipLoader";

function InputEmailBox() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch() as unknown as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(event: any) {
    setText(event.target.value);
  }

  async function login() {
    const movie_details = { email: text };
    setLoading(true);

    await dispatch(login_user(movie_details));

    const login_proceed = localStorage.getItem("login_proceed");

    if (login_proceed) {
      localStorage.setItem("login_proceed", "you have logged-in successfully");
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="h-[40px] w-[600px] six_h_screen:w-[400px] five_h_screen:w-[300px] four_h_screen:w-[230px] three_h_screen:w-[180px]">
        <input
          className="h-[40px] w-[600px] border-movi_green border-[2px] rounded-tl-[10px] rounded-bl-[10px] pl-[10px] text-black/100 focus:outline-none six_h_screen:w-[400px] five_h_screen:w-[300px] four_h_screen:w-[230px] three_h_screen:w-[180px]"
          placeholder="Enter email address"
          type="text"
          onChange={handleChange}
          value={text}
        />
      </div>

      <div
        className="w-[90px] h-[40px] flex items-center justify-center bg-movi_green rounded-br-[10px] rounded-tr-[10px] cursor-pointer hover:bg-green-950 group four_h_screen:w-[75px] three_h_screen:w-[50px]"
        onClick={login}
      >
        {loading ? (
          <ClipLoader
            color={"#FDF5F5"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <p className="text-white/100 text-[20px] text-center group-hover:text-movi_green three_h_screen:text-[15px] four_h_screen:text-[18px]">
            Go in
          </p>
        )}
      </div>
    </div>
  );
}

export default InputEmailBox;
