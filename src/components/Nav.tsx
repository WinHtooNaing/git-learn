const Nav = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4"></nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
