import "./search.css";
import { CgSearch } from "react-icons/cg";

const Search = () => {
    return <>
        <div className="main-searchbar-container">
            <div className="searchbar-container">
                <CgSearch className="search-icon" />
                <input type="text" name="roll" id="roll" placeholder="Enter roll number here" />
            </div>
        </div>
    </>
}

export default Search;