"use client";

const CATALOG_DOWNLOAD_NAME = "Evervale-B2B-Catalog.pdf";
const DEFAULT_CATALOG_URL =
  "https://d2qgk69orn74pz.cloudfront.net/files/Leaflet.pdf";

export function triggerCatalogDownload() {
  if (typeof window === "undefined") return;
  const catalogUrl =
    process.env.NEXT_PUBLIC_CATALOG_DOWNLOAD_URL?.trim() ||
    DEFAULT_CATALOG_URL;

  const link = document.createElement("a");
  link.href = catalogUrl;
  link.download = CATALOG_DOWNLOAD_NAME;
  link.rel = "noopener";

  document.body.appendChild(link);
  link.click();
  link.remove();
}
