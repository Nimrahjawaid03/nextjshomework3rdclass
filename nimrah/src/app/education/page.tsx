import Image from 'next/image'
import educationImage from '../../../images/education.webp'

export default function Education() {
  return (
    <div>
      <div className=" my-20 text-center">

<div className="card">
  <h1 className="text-blue-800 text-3xl">Education</h1>
  <p> Certification: Karachi University <br /> Masters: Karachi University <br />Graduation: Karachi University <br /> Inter: Sir Syed Govt.Girls College <br /> Matric: Progressive Model School <br />  </p>
</div>
</div>
    <div className="img-div overflow-hidden ">
<Image className='m-auto rounded-2xl' src={educationImage} alt="Education image" width={400} height={300} />
    </div>
    
    </div>
  )
}

