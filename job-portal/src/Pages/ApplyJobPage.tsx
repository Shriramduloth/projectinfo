import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";
import { useEffect, useState } from "react";

const ApplyJobPage = () => {
    const navigate = useNavigate()
    

        return (
            <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
                <Button my="md" color="brightsun.4" onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} variant="light">Back</Button>

                <ApplyJobComp />

            </div>)
    }
export default ApplyJobPage;