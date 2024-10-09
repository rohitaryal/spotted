import "./result.css";
import { PiInfoLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";

const Result = () => {
    return <>
        <div className="main-result-container">
            <div className="result-window-container">
                <div className="result-top-bar">
                    <IoPersonOutline className="person-outline" />
                    &gt;
                    <div id="searched-roll">22054403</div>
                    &gt;
                    <div className="normal-text">Details</div>
                </div>

                <div className="result-window">
                    <table>
                        <tr>
                            <th>Name</th>
                            <td id="student-name">Rohit Sharma</td>
                        </tr>
                        <tr>
                            <th>Program</th>
                            <td id="program">B.Tech Computer Science and Engin. 2022</td>
                        </tr>
                        <tr>
                            <th>Roll Number</th>
                            <td id="roll">2205423</td>
                        </tr>
                        <tr>
                            <th>Student Number</th>
                            <td id="student-number">1000162053</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td id="phone-number">765524272</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td id="email">somemail@gmail.com</td>
                        </tr>
                    </table>
                    <div className="misc-container">
                        <button>SAP Lock</button>
                    </div>
                </div>
                <div className="result-bottom-bar">
                    <span className="text">
                        <PiInfoLight className="info-icon" /> Don't use these information for harmful and unlawful purposes.
                    </span>
                </div>
            </div>
        </div>
    </>
}

export default Result;