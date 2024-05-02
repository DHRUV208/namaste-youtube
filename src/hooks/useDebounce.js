import { useEffect, useState } from "react"

const useDebounce = ({searchQuery}) => {
    const [search, setSearch] = useState(searchQuery);
    console.log("search", searchQuery);
    useEffect(() => {
//  API call
// console.log("2",searchQuery)
    }, [])
};

export default useDebounce;