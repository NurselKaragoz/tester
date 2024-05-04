import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListOfOptions() {
  return (
    <div className=" bg-purple flex flex-row">
      <div class="flex h-screen items-center justify-center px-6 md:px-60">
        <div class="space-y-6">
          <div class="relative w-full">
            <div class="ml-6">
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
                </span>
              </p>
            </div>
          </div>
          <div class="relative w-full">
            <div class="ml-6">
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} color="#b3eeb1" />
                </span>
              </p>
            </div>
          </div>
          <div class="relative w-full">
            <div class="ml-6">
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Hot Rod Demon
                <span>
                  {" "}
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
