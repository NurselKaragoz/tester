import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HeaderOfTPages() {
  return (
    <div className=" text-white flex justify-between p-6">
      <h1>
        NORTH:<span className=" font-bold">V</span>
        <h2 className=" font-bold">DÖVME MENÜSÜ</h2>
      </h1>
      <FontAwesomeIcon icon={faHouse} color="#fffff" />
    </div>
  );
}
export default HeaderOfTPages;
