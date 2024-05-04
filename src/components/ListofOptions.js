import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListOfOptions() {
  return (
    <div className=" flex flex-row">
      <div class="flex items-center justify-center px-6 md:px-60">
        <div class="space-y-6">
          <div class=" ">
            <div class="">
              <p class="mt-2 text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
                </span>
              </p>
            </div>
          </div>
          <div class=" ">
            <div class="">
              <p class="mt-2 text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
                </span>
              </p>
            </div>
          </div>
          <div class=" ">
            <div class="">
              <p class="mt-2 text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListOfOptions;
