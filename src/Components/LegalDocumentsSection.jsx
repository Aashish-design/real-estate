import React, { useState, useEffect } from "react";


export default function LegalDocumentsSection({ documents }) {
  const sample = [
    {
      id: 1,
      title: "Company PAN",
      thumb: "/src/assets/images/property-1.webp",
      full: "/src/assets/images/property-1.webp ",
      filename: "Company-PAN.pdf",
    },
    {
      id: 2,
      title: "GST Certificate",
      thumb: "/src/assets/images/2.avif",
      full: "/src/assets/images/2.avif",
      filename: "GST-Certificate.pdf",
    },
    {
      id: 3,
      title: "Company Incorporation",
      thumb: "/src/assets/images/3.avif",
      full: "/src/assets/images/3.avif",
      filename: "Incorporation-Doc.pdf",
    },
        {
      id: 4,
      title: "GST Certificate",
      thumb: "/src/assets/images/4.avif",
      full: "/src/assets/images/4.avif",
      filename: "Incorporation-Doc.pdf",
    },
    
  ];

  const docs = documents && documents.length ? documents : sample;

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : Math.max(0, i - 1)));
      if (e.key === "ArrowRight")
        setOpenIndex((i) =>
          i === null ? null : Math.min(docs.length - 1, i + 1)
        );
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, docs.length]);

  return (
    <section className="w-full">
      {/* grid */}
      <div className="w-full font-[Cabinet] flex flex-col md:flex-row gap-[6vw] md:gap-[2vw] justify-center overflow-x-hidden">
        {docs.map((d, idx) => (
          <button
            key={d.id}
            onClick={() => setOpenIndex(idx)}
            className="group bg-white md:w-[100%] rounded-lg overflow-hidden shadow-sm hover:shadow-md focus:outline-none pb-[1vw]"
            aria-haspopup="dialog"
            aria-label={`Open ${d.title}`}
          >
            <div className="w-full h-48 md:h-40 lg:h-54 overflow-hidden flex items-center justify-center bg-gray-50">
              <img
                src={d.thumb}
                alt={d.title}
                className="object-cover w-[100%] h-[100%] transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3 text-left">
              <h3 className="text-[4.5vw] md:text-[1.1vw] font-[600]">{d.title}</h3>
              <p className="text-xs text-gray-500 truncate">
                {d.filename || "Document"}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* lightbox modal */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 font-[Cabinet]"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          />

          {/* content */}
          <div className="relative z-10 max-w-[95vw] max-h-[90vh] w-full flex flex-col md:flex-row items-stretch gap-4">
            {/* left: image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex items-center justify-center">
              <img
                src={docs[openIndex].full}
                alt={docs[openIndex].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* right: info & controls */}
            <div className="w-full md:w-72 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {docs[openIndex].title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {docs[openIndex].filename}
                  </p>
                </div>
                <button
                  onClick={() => setOpenIndex(null)}
                  className="ml-2 p-1 rounded-md hover:bg-gray-100"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="flex gap-2">
                {/* <a
                  href={docs[openIndex].full}
                  target="_blank"
                  rel="noreferrer"
                  download={docs[openIndex].filename}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 border rounded-md text-sm font-medium hover:bg-gray-50"
                >
                  Open in new tab
                </a> */}

                <a
                  href={docs[openIndex].full}
                  download={docs[openIndex].filename}
                  className="inline-flex items-center justify-center px-3 py-2 bg-[#E2252D] text-white rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Download
                </a>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  Tip: Use ← and → keys to navigate, Esc to close.
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => setOpenIndex((i) => Math.max(0, i - 1))}
                    disabled={openIndex === 0}
                    className="px-3 py-2 border rounded-md disabled:opacity-50"
                    aria-label="Previous document"
                  >
                    ← Prev
                  </button>

                  <button
                    onClick={() =>
                      setOpenIndex((i) => Math.min(docs.length - 1, i + 1))
                    }
                    disabled={openIndex === docs.length - 1}
                    className="px-3 py-2 border rounded-md disabled:opacity-50"
                    aria-label="Next document"
                  >
                    Next →
                  </button>
                </div>

                <div className="text-xs text-gray-500">
                  {openIndex + 1} / {docs.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
