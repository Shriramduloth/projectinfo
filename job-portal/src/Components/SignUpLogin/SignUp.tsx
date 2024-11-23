import { Anchor, Button, Checkbox,  Notification,  PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

import { notifications,} from "@mantine/notifications";
import { signupValidation } from "../../Services/FormValidation";
const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignUp = (props: any) => {
    const [value, setValue] = useState('react');
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const handleChange = (event: any) => {
        let name = event.target.name,
            value = event.target.value;

        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signupValidation(name, value) })
        if (name === "password" && data.confirmPassword !== "") {
            let err = "";
            if (data.confirmPassword !== value) err = "Passwords do not match";
            setFormError({ ...formError, [name]: signupValidation(name, value), confirmPassword: err });
        }
        if (name === "confirmPassword") {
            if (data.password !== value) {
                setFormError({ ...formError, [name]: "Password do not match" })
            }
        }
    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key !== "confirmPassword") newFormError[key] = signupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Password do not match";
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);

        if (valid === true) {
            registerUser(data).then((res) => {
                console.log(res);
                setData(form);
                <Notification className={`!border-bright-sun-400  !fixed top-0 left-[35%] `} 
                    icon={<IconCheck style={{ width: rem(20), height: rem(20) }}/>} color="!teal'" title="Registered Succesfully !" mt="md"
                    withCloseButton={false} withBorder>
                    Redirecting to Login Page....
                </Notification >
                setTimeout(() => {
                    navigate("/login")
                }, 4000)
            }).catch((err) => {
                console.log(err);
                notifications.show({
                    title: 'Registration Failed',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{ width: "90%", height: "90%" }} />,
                    color: "red",
                    withBorder: true,
                    className: "!border-green-500"
                })
            });

        }
    }
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3 text-mine-shaft-200 ">
        <div className="text-2xl font-semibold  ">Create Account</div>
        <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your name" />
        <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email"
            placeholder="Your email" />
        <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Password" placeholder="Password" />
        <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Confirm Password" placeholder="Confirm password" />
        <Checkbox color="brightsun.4" autoContrast label={<>I accept{' '}<Anchor  >terms & conditions</Anchor></>} />
        <Button onClick={handleSubmit} color="brightsun.4" autoContrast variant="filled">Sign up</Button>
        <div className="mx-auto">Have an account? < span  className="text-bright-sun-400 hover:underline cursor-pointer" onClick={()=>{navigate("/login");setData(form)}}>Login</span></div>
    </div>
}
export default SignUp;