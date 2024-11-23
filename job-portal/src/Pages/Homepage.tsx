
import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/Dreamjob";
import JobCategory from "../Components/LandingPage/JobCategory";
import Subscribe from "../Components/LandingPage/Subscribe";
import SignUpPage from "./SignUpPage";

const Homepage = ()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
          
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Subscribe/>
            
            
        </div>
    )
}
export default Homepage;