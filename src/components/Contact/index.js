import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import { signUpSchema } from "./Schemas";
const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
const Contact = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log('🚀 ~ file: index.js:21 ~ Contact ~ ̥:', values)
        action.resetForm()
      },
    })
  console.log(
    '🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors',
    errors
  )
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    handleSubmit()
    emailjs.sendForm(
      'service_ia2k9ju',
      'template_8l7gwzm',
      form.current,
      'mLb_cqLdVqhSL7fNU'
    )
    .then(()=>{
      alert("Message Sent Successfully!");
      window.location.reload(false)
    },
    ()=> {
      alert("Failed to Send Message, Please Try Again")
    })
  }
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            >
              idx={15}
            </AnimatedLetters>
          </h1>
          <p>
            "Ready to elevate your software's quality to new heights? Reach out
            to this passionate software tester and let's ensure a flawless user
            experience together!"
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>): null}
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email&& touched.email ? (<p className='form-error'>{errors.email}</p>): null}
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && touched.subject ? (<p className='form-error'>{errors.subject}</p>): null}
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>): null}
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Loader type="pacman"></Loader>
      </div>
    </>
  )
}
export default Contact
