import Image from "next/image"
import programmingImg from '../../../images/programming.jpg'
function Programming() {
  return (
    <div className=" my-20 text-center">

      <div className="card">
        <h1 className="text-blue-800 text-3xl">Programming</h1>
        <p>Programming refers to a technological process for telling a computer which tasks to perform in order to solve problems. You can think of programming as a collaboration between humans and computers, in which humans create instructions for a computer to follow (code) in a language computers can understand.</p>
      </div>
      <div className="img-div overflow-hidden mt-20 ">
 <Image className='m-auto rounded-2xl' src={programmingImg} alt="Programming image" width={400} height={300} /> 
    </div>    </div>
  )
}

export default Programming
