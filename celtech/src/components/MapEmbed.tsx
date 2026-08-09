import { site } from "@/lib/site";

/**
 * Interactive Google Maps embed.
 * Uses the keyless `output=embed` endpoint so the map is live and pannable
 * without exposing a Maps JavaScript API key in the client bundle.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(site.address.query);
  const embedSrc = `https://www.google.com/maps?q=${query}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-line ${className}`}>
      <iframe
        title={`Map showing the ${site.name} office at ${site.address.line1}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full"
        allowFullScreen
      />
      <div className="flex items-center justify-between gap-3 bg-card px-4 py-3">
        <p className="text-sm text-body">
          {site.address.line1}, {site.address.line2}
        </p>
        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-600 hover:text-brand-500"
        >
          Get directions →
        </a>
      </div>
    </div>
  );
}
