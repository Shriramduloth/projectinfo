import { Button, Notification, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";

const form = {
    email:"",
    password:""
}
const Login = () => {
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const[opened,{open,close}]=useDisclosure(false);
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        setFormError({...formError,[event.target.name]:""});
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if(valid){
          
            loginUser(data).then((res) => { console.log(res); 
                notifications.show({
                    title: 'Login Succesfully',
                    message: 'Redirecting to home page....',
                    withCloseButton: true,
                    icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    navigate("/")
                }, 4000)
            }).catch((err) => {
                console.log(err);
                <Notification className={`!border-bright-sun-400  !fixed top-0 left-[35%] `} 
                icon={<IconCheck style={{ width: rem(20), height: rem(20) }}/>} color="!teal'" title="Login Succesfully !" mt="md"
                withCloseButton={false} withBorder>
                Redirecting to Find  Page....
            </Notification >
            });
        }
    }
    return <><div className="w-1/2 px-20 flex flex-col justify-center gap-3 text-mine-shaft-200 ">
        <div className="text-2xl font-semibold  ">Login</div>
        <TextInput value={data.email} name="email" error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email"
            placeholder="Your email" />
        <PasswordInput value={data.password} name="password" error={formError.password} onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Password" placeholder="Password" />
        <Button onClick={handleSubmit} color="brightsun.4" autoContrast variant="filled">Login</Button>
        <div className="mx-auto"> Don't have an account? < span onClick={()=>{navigate("/signup");setData(form)}}  className="text-bright-sun-400 hover:underline">SignUp</span></div>
        <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center ">Forget Password</div>
    </div>
    <ResetPassword opened={opened} close={close}/>
    </>
}
export default Login;