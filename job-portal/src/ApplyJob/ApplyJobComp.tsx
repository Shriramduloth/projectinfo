import { Button, CheckIcon, Divider, LoadingOverlay, NativeSelect, Notification, NumberInput, rem, TextInput } from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { applyjob } from "../Services/UserService";

const ApplyJobComp = (props: any) => {
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            name: '',
            fatherName: '',
            dateOfBirth: '',
            gender: '',
            email: '',
            phoneNumber: '',
            personalWeb: '',
            course: '',
            college: '',
            university: '',
            percentage: '',
            skill1: '',
            profSkill1: '',
            skill2: '',
            profSkill2: '',
        },
        validate: {
            name: isNotEmpty('Name is required'),
            fatherName: isNotEmpty('Father Name is required'),
            dateOfBirth: isNotEmpty('Enter DOB'),
            gender: isNotEmpty('Gender is required'),
            email: isNotEmpty('Email is required'),
            phoneNumber: isNotEmpty('Phone Number is required'),
            personalWeb: isNotEmpty('Enter url'),
            course: isNotEmpty('Course is required'),
            college: isNotEmpty('College is required'),
            university: isNotEmpty('University is required'),
            percentage: isNotEmpty('Enter percentage'),
            skill1: isNotEmpty('Skill is required'),
            profSkill1: isNotEmpty('Required'),
            skill2: isNotEmpty('Skill is required'),
            profSkill2: isNotEmpty('Required')
        }
    }

    )
    const { Id } = useParams();
    
    const [Preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handleSubmit = () => {
        let applicant = { ...form.getValues() };
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) navigate('/find-jobs');
        }, 1000)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        applyjob(applicant).then((res)=>{
            setSubmit(true);
        })
        .catch((err)=>{
            setSubmit(false);
            alert("Error in submitting application");
        })
       
    }
    const handlePreview = (event:any) => {
        form.validate();
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (!form.isValid()) return;
        setPreview(!Preview);

    }
    const [value, setValue] = useState<Date | null>(null);
    return <> <div className="w-2/3 mx-auto ">
        <LoadingOverlay className="!fixed"
            visible={submit} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} loaderProps={{ color: 'brightsun.4', type: 'bars' }} />
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                <div className="p-3 bg-mine-shaft-800 rounded-xl">
                    <img className="h-14" src={'/Icons/Google.png'} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer III</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull;
                        3 days ago &bull; 48 Applicants</div>
                </div>
            </div>
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
            Submit Your Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Full Name " withAsterisk placeholder="Enter name" />
                <TextInput {...form.getInputProps("fatherName")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Father Name " withAsterisk placeholder="Enter Father's name" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <DateInput {...form.getInputProps("dateOfBirth")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} size="xs" radius="xs"
                    valueFormat="DD MMM YYYY"
                    label="Date Of Birth"

                    placeholder="Enter Date"
                />
                <NativeSelect {...form.getInputProps("gender")}
                    data={['Male', 'Female', 'Other']}
                    label="Gender"
                    withAsterisk
                />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("email")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Email" withAsterisk placeholder="Enter email" />
                <NumberInput {...form.getInputProps("phoneNumber")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Phone Number" hideControls min={0}
                    max={9999999999} clampBehavior="strict" withAsterisk placeholder="Enter Phone Number " />
            </div>
            <div >
                <TextInput {...form.getInputProps("personalWeb")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Personal Website" withAsterisk placeholder="Enter URL" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2 font-semibold text-xl mt-10">
                Qualifications
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("course")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Course" withAsterisk placeholder="Enter Cousre" />
                <TextInput {...form.getInputProps("college")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="College " withAsterisk placeholder="Enter College" />
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("university")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="University" withAsterisk placeholder="Enter University" />
                <TextInput {...form.getInputProps("percentage")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Percentage" withAsterisk placeholder="Enter Percentage" />

            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("skill1")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Skill 1" withAsterisk placeholder="Enter Skill" />
                <NativeSelect {...form.getInputProps("profSkill1")} data={['Beginner', 'Intermediate', 'Advanced']} label="Proficiency" withAsterisk />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("skill2")} readOnly={Preview} variant={Preview ? "unstyled" : "default"} className={`${Preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Skill 2" withAsterisk placeholder="Enter Skill" />
                <NativeSelect {...form.getInputProps("profSkill2")} data={['Beginner', 'Intermediate', 'Advanced']} label="Proficiency" withAsterisk />
            </div>
            {!Preview && <Button onClick={handlePreview} color="brightsun.4" variant="light">Preview</Button>}
            {
                Preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="brightsun.4" variant="outline">Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color="brightsun.4" variant="light">Submit</Button>
                </div>
            }
        </div>
    </div>
    
        <Notification className={`!border-bright-sun-400 -translate-y-20 z-[1001] !fixed top-0 left-[35%] 
        transition duration-300 ease-in-out ${submit ? "translate-y-0" : ""}`}
            icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} color="!teal'" title="Application Submitted Succesfully !" mt="md"
            withCloseButton={false} withBorder>
            Redirecting to Find Jobs in {sec} seconds....
        </Notification >
    </>
}
export default ApplyJobComp;