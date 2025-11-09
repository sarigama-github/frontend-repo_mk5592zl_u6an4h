function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Social Media Downloader. All rights reserved.</p>
        <p className="text-gray-500">For personal use only. Respect platform terms.</p>
      </div>
    </footer>
  );
}

export default Footer;
