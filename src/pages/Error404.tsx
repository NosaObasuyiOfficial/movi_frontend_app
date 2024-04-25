import movi_logo from "../assets/images/movi_logo.png";
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full pt-[100px]">
        <img className="w-[150px]" src={movi_logo} alt="movi logo" />

        <div className="text-center pt-[20px] font-movi_font_three">
        <h1 className="text-[20px] text-red-600 font-bold">404 - Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You can always go back to the <Link to="/"><span className="font-bold text-blue-600">home page</span></Link>.</p>
        </div>
      </div>
    </>
  );
}

export default Error404;
































































