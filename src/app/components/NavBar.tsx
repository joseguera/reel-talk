import SearchBar from "./SearchBar";
import Image from 'next/image';
import logo from '../../images/logo.svg'

export default function NavBar() {
  return (
    <div className="h-14 flex flex-row items-center justify-center gap-10 bg-white text-[#222222] font-avenir">
      <nav className="flex flex-row items-center gap-8">
        <Image src={logo} alt="logo" width={118} height={26} />
        <a href="#">Browse</a>
        <a href="#">Community</a>
        <a href="#">Discussions</a>
      </nav>
      <SearchBar />
      <div className="flex flex-row items-center gap-8">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}
