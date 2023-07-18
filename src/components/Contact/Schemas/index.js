import * as Yup from 'yup'
export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(26).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    subject: Yup.string().min(5).required("Please Enter The Subject"),
    message: Yup.string().min(10).max(400).required("Type Your Message")
})