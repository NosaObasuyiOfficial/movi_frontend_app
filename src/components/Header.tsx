import { useLocation } from "react-router-dom";
import movi_logo from "../assets/images/movi_logo.png";
import p_icon from "../assets/images/p_icon.png";

function Header() {
  const location = useLocation();
  const isLocation = location.pathname;

  return (
    <>
      {isLocation === "/movi/dashboard" ? (
        <div className="h-[80px] px-[20px] w-full flex bg-transparent">
          <div className="w-full flex items-center justify-start">
            <img className="w-[150px]" src={movi_logo} alt="movi logo" />
          </div>
          <div className="w-full flex items-center justify-end">
            <img
              className="w-[30px] h-[30px] rounded-[5px]"
              src={p_icon}
              alt="movi logo"
            />
          </div>
        </div>
      ) : (
        <div className="h-[80px] px-[20px] w-full  bg-fade-dark-gradual">
          <div className="w-full pt-[14px] flex items-center justify-start">
            <img className="w-[150px]" src={movi_logo} alt="movi logo" />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
