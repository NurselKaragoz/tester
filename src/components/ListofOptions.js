import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListOfOptions() {
  return (
    <div className=" flex flex-col text-white gap-10 text-lg">
      <div class=" flex bg-cusblue100 w-screen justify-around">
        <p className=" pl-5">
          Hot Rod Demon 150 <span className=" text-cusgreen">$</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
          </span>
        </p>
      </div>
      <div className=" flex ">
        <p class=" pl-5">
          Hot Rod Demon 150 <span className=" text-cusgreen">$</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
          </span>
        </p>
      </div>
      <div className=" flex bg-cusblue100 w-screen ">
        <p class=" pl-5">
          Hot Rod Demon 150 <span className=" text-cusgreen">$</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
          </span>
        </p>
      </div>
      <div className=" flex ">
        <p class=" pl-5">
          Hot Rod Demon 150 <span className=" text-cusgreen">$</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
          </span>
        </p>
      </div>
      <div className=" flex bg-cusblue100 w-screen">
        <p class=" pl-5">
          Hot Rod Demon 150 <span className=" text-cusgreen">$</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
          </span>
        </p>
      </div>
    </div>
  );
}
export default ListOfOptions;
