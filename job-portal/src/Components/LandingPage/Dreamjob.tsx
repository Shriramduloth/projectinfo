import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find Your <span>Dream</span> <span>Job</span> With US
                </div>
                <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start explore thousands of jobs in one place.</div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Fulltime" />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 " variant="unstyled" label="Job Title" placeholder="Software Engineer " />
                    <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
                    <IconSearch className="h-[85%] w-[85%]"/>
                    </div>
                </div>
            </div>
            <div className="flex w-[55%] items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/Boy.png" alt="" />
                </div>
            </div>
        </div>
    );
}
export default DreamJob;