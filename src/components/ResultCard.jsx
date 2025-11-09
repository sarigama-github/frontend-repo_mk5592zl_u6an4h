function ResultCard({ data }) {
  if (!data) return null;

  const { platform, title, thumbnail, downloads = [], info } = data;

  return (
    <div className="mt-8 max-w-4xl mx-auto bg-white border border-gray-100 shadow-md rounded-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {thumbnail ? (
          <img src={thumbnail} alt={title || 'Thumbnail'} className="w-full sm:w-56 h-48 object-cover" />
        ) : (
          <div className="w-full sm:w-56 h-48 bg-gray-100 flex items-center justify-center text-gray-500">No thumbnail</div>
        )}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1">{platform}</span>
          </div>
          <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">{title || 'Untitled'}</h3>

          {downloads.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {downloads.map((d, idx) => (
                <a
                  key={idx}
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow transition"
                >
                  <div className="text-sm text-gray-600">{d.type.toUpperCase()}</div>
                  <div className="text-gray-900 font-medium">{d.quality || 'Standard'}</div>
                  <div className="mt-2 inline-flex items-center text-blue-600 group-hover:underline">Download →</div>
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-600">No direct links available. {info ? `Info: ${info}` : ''}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
