import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: "Home", url: "Homepage" },
        { name: "Find Jobs", url: "find-jobs" },
        { name: "Sign Up", url: "signup" },
        {name:"About Us ", url:"about"},
    ]
    const location = useLocation();
    return <div className=" flex gap-5 text-mine-shaft-300 h-full items-center  ">
        {
            links.map((link, index) =>
                <div className={`${location.pathname=="/"+link.url?"border-bright-sun-400 text-bright-sun-400":"border-none"} border-t-[3px] h-full flex items-center`}><Link key={index} to={link.url} >{link.name}</Link></div>)
        }
    </div>
}
export default NavLinks;