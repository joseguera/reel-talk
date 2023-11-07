import Image from "next/image"

export default function SearchBar() {
    return (
        <div className="flex flex-row items-center">
            <h2>&#9906;</h2>
            <input placeholder="Search" />
        </div>
    )
}