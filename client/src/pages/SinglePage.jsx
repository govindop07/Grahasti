import Slider from "../components/Slider";
import Map from "../components/Map";
import { CiLocationOn } from "react-icons/ci";
import { singlePostData, userData } from "../lib/dummyData.js";

function SinglePage() {
  return (
    <div className="flex w-full justify-center p-4">

    <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row justify-center max-w-[1280px] h-full">
      <div className="lg:w-[60%] lg:pr-12">
        <div>
          <Slider images={singlePostData.images} />
        </div>

        <div className="info mt-4">
          <div className="top flex justify-between items-start">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h1 className="text-2xl font-medium">{singlePostData.title}</h1>
              <div className="flex gap-2 items-center text-gray-500 text-sm">
                <CiLocationOn className="w-5 h-5" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="p-1 bg-amber-300 rounded-md text-lg font-light w-max">
                $ {singlePostData.price}
              </div>
            </div>

            <div className="user flex items-center gap-2 md:gap-4 bg-red-50 p-2 text-sm md:text-lg rounded-md md:rounded-xl">
              <img
                src={userData.img}
                alt={userData.name}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                />
              <span className="font-medium">{userData.name}</span>
            </div>
          </div>

          <div className="bottom mt-6 text-sm text-gray-700">
            {singlePostData.description}
          </div>
          
        </div>
      </div>

      <div className="lg:w-[40%]">

        {/* <p className="text-lg font-bold mb-2">General</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <img src="/utility.png" alt="Utilities" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">Utilities</span>
              <p className="text-sm text-gray-600">Renter is responsible</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/pet.png" alt="Pet Policy" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">Pet Policy</span>
              <p className="text-sm text-gray-600">Pets Allowed</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/fee.png" alt="Property Fees" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">Property Fees</span>
              <p className="text-sm text-gray-600">
                Must have 3x the rent in total household income
              </p>
            </div>
          </div>
        </div> */}

        {/* <p className="text-lg font-bold mt-4 mb-2">Sizes</p>
        <div className="flex gap-6">
          <div className="flex items-center">
            <img src="/size.png" alt="Size" className="w-6 h-6 mr-2" />
            <span>80 sqft</span>
          </div>
          <div className="flex items-center">
            <img src="/bed.png" alt="Beds" className="w-6 h-6 mr-2" />
            <span>2 beds</span>
          </div>
          <div className="flex items-center">
            <img src="/bath.png" alt="Bathroom" className="w-6 h-6 mr-2" />
            <span>1 bathroom</span>
          </div>
        </div>

        <p className="text-lg font-bold mt-4 mb-2">Nearby Places</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center">
            <img src="/school.png" alt="School" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">School</span>
              <p className="text-sm text-gray-600">250m away</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/pet.png" alt="Bus Stop" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">Bus Stop</span>
              <p className="text-sm text-gray-600">100m away</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/fee.png" alt="Restaurant" className="w-6 h-6 mr-4" />
            <div>
              <span className="font-medium">Restaurant</span>
              <p className="text-sm text-gray-600">200m away</p>
            </div>
          </div>
        </div> */}

        <p className="text-lg font-bold mt-4 mb-2 z-10">Location</p>
        <div className="h-64 bg-gray-100 rounded-md mb-6">
          <Map items={[singlePostData]} />
        </div>

        <div className="flex gap-4 mt-3">
            <button className="flex items-center px-4 py-2 border rounded-md cursor-pointer">
              <img src="/chat.png" alt="Chat" className="w-5 h-5 mr-2" />
              Send a Message
            </button>
            <button className="flex items-center px-4 py-2 border rounded-md cursor-pointer">
              <img src="/save.png" alt="Save" className="w-5 h-5 mr-2" />
              Save the Place
            </button>
          </div>

      </div>

    </div>
  </div>
  );
}

export default SinglePage;