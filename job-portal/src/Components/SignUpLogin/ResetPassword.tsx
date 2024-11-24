import { Button, Modal, PasswordInput, PinInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";

const ResetPassword = (props: any) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const[password ,setPassword]=useState("");
    const[passError ,setPassError]=useState("");
    const handleSendOtp = () => {
        setOtpSending(true);
        sendOtp(email).then((res) => {
            setOtpSent(true);
            setOtpSending(false);
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
        })
    }
    const handleVerifyOtp=(otp:string)=>{
        verifyOtp(email,otp).then((res)=>{
            setVerified(true);
        }).catch((err)=>{ 

        })
    }
    const handleResendOtp=()=>{

    }
    const handleResetPassword=()=>{

    }
    const changeEmail=()=>{
        setOtpSent(false);
    }
    
    return <Modal opened={props.opened} onClose={props.close} title="Reset Password">
        <div className="flex flex-col gap-6 ">
            <TextInput value={email} name="email" size="md" onChange={(e) => setEmail(e.target.value)} leftSection={<IconAt size={16} />} label="Email"
                withAsterisk placeholder="Your email" rightSection={<Button loading={otpSending} size="xs" className="mr-1 bg-bright-sun-400" onClick={handleSendOtp} autoContrast disabled={email === "" || otpSent} variant="filled">Login</Button>}
                rightSectionWidth="xl"
            />{
                otpSent&&<PinInput onComplete={handleVerifyOtp} length={6} className=" mx-auto" size="md" gap="lg" type="number"/>
            }
            {otpSent && !verified &&
            <div className="flex gap-2">
                <Button fullWidth loading={otpSending} color="brightsun.4" onClick={handleResendOtp} autoContrast  variant="light">Resend</Button>
                <Button fullWidth onClick={changeEmail} autoContrast variant="filled">Change Email</Button>
            </div>
                 }
                 {verified&&<PasswordInput value={password} name="password" error={passError} onChange={(e)=>{setPassword(e.target.value);setPassError(signupValidation("password",e.target.value))}} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Password" placeholder="Password" />}
            {
                verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
            }
        </div>
    </Modal>

}

export default ResetPassword;