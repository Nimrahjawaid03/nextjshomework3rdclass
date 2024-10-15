import Image from "next/image"
import myImage from '../../images/bubbles-1985152.png'

function MyImage() {
  return (
    <div>
      <Image className="filter" src={myImage} alt='nmj1' width={400} height={900} />
    </div>
  )
}

export default MyImage
