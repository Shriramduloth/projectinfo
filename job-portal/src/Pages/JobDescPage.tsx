import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import exp from "constants"
import { Link } from "react-router-dom"
import JobDesc from "../JobDesc/JobDesc"

const JobDescPage = (props:any) => {
    return (
        <div className="min-h-[90vh] [bg-mine-shaft-950 font-['poppins' ] p-4 ">
            <Divider size="xs" mx="md" />
            <Link className="my-5 inline-block" to="/find-jobs">
                <Button color="brightsun.4" leftSection={<IconArrowLeft size={20} />}
                    variant="light">Back</Button>
            </Link>
            <div className="flex gap-5">
                <JobDesc/>
            </div>
        </div>
    )
}
export default JobDescPage;
