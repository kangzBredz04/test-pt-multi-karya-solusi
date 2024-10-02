export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-12 flex justify-between items-center p-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img
            src="https://mksolusi.id/wp-content/uploads/2019/05/logo.png"
            className="w-16"
            alt=""
          />
        </div>
        {/* Navigation */}
        <nav className="space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
