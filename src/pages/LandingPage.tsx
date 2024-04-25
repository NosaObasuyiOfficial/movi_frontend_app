import Header from "../components/Header"
import movi_lp_logo from "../assets/images/movi_lp_background.jpeg"
import InputEmailBox from "../components/InputEmailBox"
import { useSelector } from "react-redux";

function LandingPage() {

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const error_mesage  = useSelector((state:any) => state.error)

  return (
    <>
        <div
        style={{ backgroundImage: `url(${movi_lp_logo})` }}
        className="bg-center bg-cover w-screen h-screen transition-transform ease-out duration-500"
      >
        <div className="h-full bg-black-fade">
        <Header />
        
        <div className="h-screen flex flex-col gap-[20px] items-center justify-center w-full mt-[-100px]">
        <p className="text-center text-[30px] font-movi_font_one three_h_screen:text-[20px]">
            Endless Films, Series,<br />and Beyond.
            </p>
            <p className="text-[14px] text-center mt-[-20px] italic font-movi_font_two three_h_screen:text-[20px]">
              Get comfortable anywhere, anytime.
            </p>
        <InputEmailBox />
        <p className="mt-[-15px] text-center font-movi_font_two">Please enter your email to access your account immediately.</p>
        {error_mesage ? <p className="mt-[-15px] text-center font-movi_font_two text-red-300 italic">{error_mesage}</p> : <p></p>}
        </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage