import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card } from "../Data/JobDescData";

const JobDesc = () => {
    return <div className="w-2/3 mx-auto">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center ">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className=" h-14 " src={`/Icons/google.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold text-2xl">Software Engineer III</div>
                    <div className="text-lg text-mine-shaft-300 ">Google &#x2022; 3 days ago &bull; 48 Applicants</div>
                </div>
            </div>
            <div className=" flex flex-col gap-2 items-center ">
                <Link to="/apply-job">
                    <Button color="brightsun.4" size="sm" variant="filled">Apply Now </Button>
                </Link>
                <Link to="/mocktest">
                    <Button color="brightsun.4" size="sm" variant="light">Mock Test </Button>
                </Link>
            </div>
        </div>
        <Divider my="xl" />
        <div className="flex  justify-between">
            {
                card.map((item: any, index: number) =>
                    <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon color="brightsun.4" className="!h-12 !w-12" variant="light"
                            radius="xl" aria-label="Settings">
                            <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-300">
                            {item.name}
                        </div>
                        <div className="font-semibold">
                            {item.value}
                        </div>
                    </div>
                )}

        </div>
        <Divider my="xl" />
    </div>
}
export default JobDesc;