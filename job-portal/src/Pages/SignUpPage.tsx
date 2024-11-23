import { IconArrowLeft, IconBriefcase } from "@tabler/icons-react";

import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignUpLogin/Login";
import SignUp from "../Components/SignUpLogin/SignUp";
import { Button } from "@mantine/core";
const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
        <Button className="!absolute left-5 z-10" size="sm" onClick={() => navigate("/")} my="lg" color="brightsun.4" leftSection={<IconArrowLeft size={20} />} variant="light">Home</Button>
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000
            flex [&>*]:flex-shrink-0 ${location.pathname == '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname == "/signup" ? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-mine-shaft-900 
            flex items-center gap-5 justify-center flex-col`}>
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconBriefcase className="h-16 w-16" stroke={2.5} />
                    <div className="text-6xl font-semibold">Workfolio</div>
                </div>
                <div className="text-2xl text-mine-shaft-200 font-semibold">Find the Job made for you</div>
            </div>
            <SignUp />
        </div>
    </div>
}
export default SignUpPage;