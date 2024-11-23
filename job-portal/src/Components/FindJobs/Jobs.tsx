import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";

const Jobs = () => {
    return <div >
        <div className="mt-5">
            <div className="font-semibold">Recommended Jobs</div>

        </div>
        <div className="mt-10 flex flex-wrap gap-5">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>
    </div>
}
export default Jobs;