import movi_logo from "../assets/images/movi_logo.png";
import RingLoader from "react-spinners/RingLoader";

function LoadingSpinner() {
  return (
    <>
      <div className="flex flex-col gap-[10px] items-center justify-center h-screen">
        <img className="w-[150px]" src={movi_logo} alt="movi logo" />
        <RingLoader
          color={"#68C939"}
          loading={true}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

export default LoadingSpinner;
