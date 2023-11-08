import Image from "next/image"
import search from '../../images/Search Icon.svg'

export default function SearchBar() {
    return (
        <div className="w-80 h-8 flex flex-row items-center gap-2.5 px-6 py-1.5 rounded-lg bg-[#00000014]">
            <Image src={search} alt="loop icon" width={16} height={16} />
            <input className="bg-transparent outline-none" placeholder="Search" />
        </div>
    )
}