import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESSTIONS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import  cacheResults  from "../utils/slices/searchSlice";

const SearchBarSuggesstions = () => {
  const [suggesstions, setSuggesstions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggesstions, setShowSuggesstions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesstions(searchCache[searchQuery]);
      } else {
        getSearchSuggesstions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggesstions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESSTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggesstions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };
  return (
    <div className="">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-5 border p-2 rounded-l-full border-gray-400 w-1/2"
          onFocus={() => setShowSuggesstions(true)}
          onBlur={() => setShowSuggesstions(false)}
        />
        <button className="rounded-r-full bg-gray-100 border border-gray-400 px-5 py-2">
          🔍
        </button>
      </div>
      {showSuggesstions && (
        <div className=" absolute rounded-lg shadow-lg bg-white py-2 px-2 w-[37rem] border border-gray-200">
          <ul>
            {suggesstions.map((suggesstion) => (
              <li
                key={suggesstion}
                className="py-2 px-3 hover:bg-gray-400 shadow-sm"
              >
                🔍 {suggesstion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBarSuggesstions;
