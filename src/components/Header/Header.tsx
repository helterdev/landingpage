import { Button } from '../ui/button';
import { MdAccountCircle } from "react-icons/md";
export default function Header() {
  return (
    <header>
      <div className="w-4/5 flex justify-between m-auto pt-5">
        <div className="flex items-center gap-x-3 font-medium">
          <span>|||</span>
          <h3 className="text-lg font-bold sm:text-4xl">
            Uber <span className="font-bold">Eats</span>
          </h3>
        </div>
        <nav className="flex sm:items-center gap-x-3">
          <div>
            <Button className=' w-16  rounded-full sm:w-24 gap-x-1 bg-white text-black hover:bg-slate-300'><MdAccountCircle/>Log in</Button>
          </div>
          <div>
            <Button className='w-16  rounded-full sm:w-24 bg-black hover:bg-slate-800'>Sing up</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
