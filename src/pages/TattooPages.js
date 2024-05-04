import HeaderOfTPages from "../components/HeaderOfTPages";
import ListOfOptions from "../components/ListofOptions";
import RightSide from "../components/RightSide";

function TattooPages() {
  return (
    <div className=" bg-cusblue flex flex-row w-4/5">
      <div className=" flex">
        <HeaderOfTPages />
        <ListOfOptions />
      </div>
      <div className=" flex bg-cusgray max-h-full w-1/5 ">
        <RightSide />
      </div>
    </div>
  );
}
export default TattooPages;
