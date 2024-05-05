import HeaderOfTPages from "../components/HeaderOfTPages";
import ListOfOptions from "../components/ListofOptions";
import RightSide from "../components/RightSide";

function TattooPages() {
  return (
    <div className=" bg-cusblue flex flex-row  h-screen">
      <div className=" flex flex-col gap-20 w-5/6 ">
        <div className="  ">
          <HeaderOfTPages />
        </div>
        <div className="  ">
          <ListOfOptions />
        </div>
      </div>
      <div className=" flex bg-cusgray max-h-full w-1/6 justify-center">
        <div className="  bg-cusgray text-white  flex justify-center items-center  ">
          <h2 className="  [writing-mode:vertical-lr] items-center text-xl">
            <span className="font-bold">KAFA </span> GÖVDE SOL KOL SAĞ KOL SOL
            BACAK SAĞ BACAK
          </h2>
        </div>
      </div>
    </div>
  );
}
export default TattooPages;
