export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 NYZA Labs
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-purple transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-purple transition-colors">LINKEDIN</a>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-purple transition-colors">KONTAKT</a>
            <a href="#" className="hover:text-purple transition-colors">ABOUT</a>
            <a href="#" className="hover:text-purple transition-colors">IMPRESSUM POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
