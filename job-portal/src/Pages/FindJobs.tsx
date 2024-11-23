import { Divider } from "@mantine/core";
import Jobs from "../Components/FindJobs/Jobs";
import SearchBar from "../Components/FindJobs/SearchBar";

const FindJobs =()=> {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-6">
           <Divider size="xs" mx="md"/>
            <SearchBar/>
           <Divider size="xs" mx="md"/>
            <Jobs/>
        </div>
    )
}
export default FindJobs;