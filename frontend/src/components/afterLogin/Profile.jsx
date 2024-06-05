import profileStyle from "../../style/Profile.css"
import $ from "../js/Navbar.js";


export function Profile() {
    return (
        <>
            <div className="profile">
                <span className="name" id="firstName">Nayan</span>
                <span className="name" id="lastName">Khade</span>
                <div className="profile-img"></div>
            </div>
        </>
    )
}