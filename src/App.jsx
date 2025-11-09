import { useCallback, useState } from 'react';
import Hero from './components/Hero';
import UrlInput from './components/UrlInput';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = useCallback(async (url) => {
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND}/api/fetch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.detail || 'Failed to fetch data');
      }
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Hero />

      <main className="relative z-10 -mt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 sm:p-8">
            <UrlInput onSubmit={handleSubmit} loading={loading} />

            {loading && (
              <div className="mt-8 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
              </div>
            )}

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            {!loading && !error && result && <ResultCard data={result} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
