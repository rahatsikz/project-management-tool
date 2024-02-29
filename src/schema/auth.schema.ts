import * as yup from "yup"

interface FileWithSize {
    size?: number;
}
export const SignUpSchema = yup.object().shape({
    name: yup.string().required('Name field is required'),
    email: yup.string().email().required('Email field is required'),
    password: yup.string().min(6).max(32).required(),
    confirmPassword: yup.string().required("Please re-type your password").oneOf([yup.ref("password")], "Passwords does not match"),
    image: yup.mixed().test('fileSize', 'File size must be less than 3MB', (value: FileWithSize | undefined) => {
        if (value && value.size !== undefined) {
            return value.size <= 3145728;
        }
        return true;
    }
    ),
})
export const SignInSchema = yup.object().shape({
    email: yup.string().email().required('Email field is required'),
    password: yup.string().required(),
})





