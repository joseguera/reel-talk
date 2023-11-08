import SearchBar from "./SearchBar";
import Image from 'next/image';
import logo from '../../images/logo.svg'

export default function NavBar() {
  return (
    <div className="w-screen">

    <div className="h-14 flex flex-row items-center justify-center gap-10 bg-white text-[#222222] font-avenir">
      <nav className="flex flex-row items-center gap-8 text-base">
        <Image src={logo} alt="logo" width={118} height={26} />
        <a href="#">Browse</a>
        <a href="#">Community</a>
        <a href="#">Discussions</a>
      </nav>
      <SearchBar />
      <div className="flex flex-row items-center gap-4">
        <button className="flex items-center w-[74px] h-[34px] py-1.5 px-4 rounded font-medium border border-[#222222]">Login</button>
        <button className="flex items-center w-[85px] h-[34px] py-1.5 px-4 rounded font-medium bg-[#FFA724]">Signup</button>
      </div>
    </div>
    </div>
  );
}
