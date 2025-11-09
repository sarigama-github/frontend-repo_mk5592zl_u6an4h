import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Social Media Downloader
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Download from Instagram (Reels, Stories, Photos) and YouTube (Video & Audio). Paste a link and go.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
    </section>
  );
}

export default Hero;
