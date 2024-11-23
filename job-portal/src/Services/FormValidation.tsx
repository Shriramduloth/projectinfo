const signupValidation = (name: string, value: string) => {
    switch (name) {
        case "name":
            if (value.length === 0) return "Name is required."
            return "";
        case "email":
            if (value.length === 0) return "Email is required.";
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid";
            return "";
        case "password":
            if (value.length === 0) return "Password is required.";
            if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) return "Password must be 8-15 characters  with an uppercase, a lowercase, a number and a special character. "
            return "";
        default:
            return "";
    }
}
const loginValidation = (name: string, value: string) => {
    switch (name) {
        case "email":
            if (value.length === 0) return "Email is required.";
            return "";
        case "password":
            if (value.length === 0) return "Password is required.";
            return "";
        default:
            return "";
    }
}
export { signupValidation, loginValidation };