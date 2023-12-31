import { IoLogoGithub } from "react-icons/io";
export default function Footer(){
    return (
        <footer className="h-screen bg-slate-950 text-white">
            <div className="w-4/5 m-auto h-full flex items-center justify-between">
                <h3 className="text-lg font-bold sm:text-4xl">Uber Eats</h3>
                <p className=" flex  items-center gap-x-1 text-lg font-bold sm:text-2xl">©2023 <a href="https://github.com/helterdev/landingpage" target="_blank"><IoLogoGithub/></a></p>
            </div>
        </footer>
    )
}