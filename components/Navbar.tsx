import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-7'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-8 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <div className="flex items-center justify-between">
        <Image
          src='/bookcar.png'
          alt='logo'
          width={100}
          height={18}
          className='object-contain'
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex-1 pt-2 ml-4 padding-y">
        <h1 className="hero__maintitle">
          BookTheCar
        </h1></div>
        </div>
      </Link>
      <CustomButton 
       title="Sign in"
       btnType='button'
       containerStyles='text-blue-500 rounded-full bg-white min-w-[130px]'
       />
    </nav>
  </header>
);

export default NavBar;
