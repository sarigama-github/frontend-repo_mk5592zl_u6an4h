import { useState } from 'react';

function UrlInput({ onSubmit, loading }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!url.trim()) {
      setError('Please paste a URL');
      return;
    }
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mt-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste Instagram or YouTube URL"
          className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? 'Fetching...' : 'Download'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  );
}

export default UrlInput;
