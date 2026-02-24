import  Image from "next/image"

const AboutPage
 = () => {
  return (
    <div className=" flex items-center justify-between p-4 bg-indigo-900 text-bold  text-white min-h-screen">
    <h1>About Page!</h1>
    <Image src="/surafel.JPG"
    alt="no image here"
   width={200}
   height={200}
    className="rounded-full"
    />

    </div>
  )
}

export default AboutPage

