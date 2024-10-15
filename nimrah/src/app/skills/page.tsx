import Image from "next/image"
import skillsImage from '../../../images/skills.png'
function Skills() {
  return (
    <div className=" my-20 text-center">

      <div className="card">
        <h1 className="text-blue-800 text-3xl">Skills</h1>
        <p>HTML <br /> CSS <br /> Tailwind <br /> Javascript <br /> Typescript <br /> Next.js <br /> React <br /> Node.js <br /> Communication <br /></p>
      </div>
      <div className="img-div overflow-hidden mt-20 ">
     <Image className="m-auto rounded-2xl" src={skillsImage} alt="" width={400} height={300} /> 
    </div> </div>
  )
}

export default Skills
