import { FiClipboard } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center gap-4">
        <FiClipboard className="h-12 w-12 text-purple-500" />
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Vibrant Todos
        </h1>
      </div>
      <p className="mt-3 text-lg text-gray-600">Your colorful and modern task manager</p>
    </header>
  );
};

export default Header;