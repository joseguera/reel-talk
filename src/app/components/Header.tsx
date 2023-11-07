import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex flex-row item-center justify-center gap-10">
      <nav className="flex flex-row items-center gap-8">
        <h2>Logo</h2>
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
