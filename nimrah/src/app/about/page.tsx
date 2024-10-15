import Image from "next/image"
import aboutImage from '../../../images/About Me.jpg'
function About() {
  return (
    <div className=" my-20 text-center">

      <div className="card">
        <h1 className="text-blue-800 text-3xl">About Me</h1>
        <p>Name:Nimrah M.Jawaid <br />Profession:AI Enthusiast <br /> Email:nimra00@gmail.com <br /> Contact:0344-0387080 <br />  </p>
      </div>
      <div className="img-div overflow-hidden mt-20  ">
<Image className='m-auto rounded-2xl' src={aboutImage} alt="About image" width={400} height={400} />
    </div>    </div>
  )
}

export default About
