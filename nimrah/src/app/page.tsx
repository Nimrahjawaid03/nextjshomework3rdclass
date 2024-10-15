import MyImage from "@/components/MyImage";

export default function Home() {
  return (
    <div className="flex bg-indigo-100">

    
    <div className="m-10 p-10 w-[70%] border-t-2 border-b-2 border-red-600">
      <h1 className=" border-t-2 border-indigo-600 text-7xl pt-10 mt-5 text-blue-900 italic">Welcome to <span className="text-red-500">NMJ</span>'s Portfolio</h1>
      <p className="text-slate-500 text-2xl mt-5 italic border-b-2 border-indigo-600 pb-5">Hello I am nimrah I am a software engineer I have worked on multiple projects  Here you can find out about me and my skills in Technology."Hi,I am studing Cloud AI Artificial Intelligence , Metaverse & Web 3.0 At Sindh Govornor House.I'm studied HTML, CSS, and JavaScript, and now I'm focusing on Next.js,I love turning ideas into functional and visually appealing web experiences.I've workeed on projects ranging from simple static websites to dynamic applications,always focusing on clean and seamless user interaction.Let's connect and create something amazing together!"</p>
    </div>
    <div className="m-auto rounded-2xl w-[30%]  border border-3">
      <MyImage />
    </div>
    </div>
  );
}
