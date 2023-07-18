import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sel from '../../assets/images/selenium.svg'
import Jira from '../../assets/images/jira.svg'
import Post from '../../assets/images/postman.svg'
import Uipath from '../../assets/images/uipath.svg'
import wat from '../../assets/images/wat.svg'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          "Life is under construction until you build yourself". <br />
          Abhishek Gupta aspires to be Expert QA Tester with SDET Skills.
          L.I.O.N (17300+ Linkedin #followers)
        </p>
        <p>
          #Interest <br />
          Software QA(#Testing), Cloud Services, Cyber Security, Marketing &
          Sales, Data Engineering, Web Development.
        </p>
        <p>
          #Education <br />
          Bachelor's in Computer Science from Lovely Professional University,
        </p>
        <p>
          I am a learner, enthusiast, and confident about decision making. I am
          fearless, self-motivated, ambitious. I believes in proper time
          management and hard work. I have thrilled to Discovering & solving
          real-life problems.
        </p>
        {/* <p>
            #Work Experience <br />
            Hands-on 4 years experience as a QA Tester in #QA Team at outgrow.co
            major as a #WebApplication Tester. <br />
            Extensive QA Tester experience in analyzing business requirements,
            creating #TestPlans, Creating & Executing #TestCases and
            #TestScripts, #Defect management, reporting, and release support. 
            <br />
            Worked in #BugReporting using Asana <br />
            Proficient in handling multiple tasks simultaneously and can work
            under pressure. <br />
            Well versed in #DefectTracking & #Reporting. <br />
            Good Experience in creating, modifying, and enhancing both manual
            Test cases and Test Scripts <br />
            #Experience in identifying #TestScenarios and preparing #TestCases
            for #FunctionalTesting and #RegressionSuites. <br />
            #Experience in #FunctionalTesting, #SystemTesting, and
            #UserAcceptanceTesting. <br />
            #Experience in Automating #WebApplications using #Selenium
            #WebDriver with Java. <br />
            #Experience in Designing #Maven with #TestNG. <br />
            Excellent communication and interpersonal skills with a strong work
            ethic. <br />
            Team player, Highly Productive, Commitment, and Result Driven in the
            Team and Individual Projects.
          </p> */}
        <p>
          #Technical Summary: <br />
          Bug Tracking /Test Management <br />
          #Software Testing tools: Jira, Redmine, BrowserStack <br />
          #Operating Systems: Windows, Linux Mint, Ubuntu, Mac, IOS <br />
          #Software Automation tool: Selenium Web driver <br />
          #API Tools: Postman <br />
          #IDE: Eclipse <br />
          #Methodologies: Agile and Waterfall <br />
          #Packages: MS Office <br />
          #Domain Knowledge: Information Technology, Marketing, Lead Generation
          & CRM Tools, E-Learning. <br />
        </p>
      </div>
      <div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color='#5382a1'/>
            </div>
            <div className="face2">
              <img src={Jira} alt="A" />
            </div>
            <div className="face3">
              <img src={Post} alt="A" />
            </div>
            <div className="face4">
              <img src={Uipath} alt="A" />
            </div>
            <div className="face5">
              <img src={Sel} alt="A" />
            </div>
            <div className="face6">
              <img src={wat} alt="A" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman">
      
    </Loader>
    </>
  )
}
export default About
