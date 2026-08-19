"use client";

import Image from "next/image";

const PHOTOS = [
  {
    src: "/fotos/einzelzimmer.png",
    label: "Einzelzimmer",
    alt: "Wohnliches Einzelzimmer der Anicca Pflege WG",
  },
  {
    src: "/fotos/gemeinschaftsraum.png",
    label: "Gemeinschaftsraum",
    alt: "Gemeinschaftsraum der Anicca Pflege WG",
  },
  {
    src: "/fotos/kueche.png",
    label: "Küche",
    alt: "Küche der Anicca Pflege WG",
  },
  {
    src: "/fotos/pohlstrasse.png",
    label: "Pohlstraße 49",
    alt: "Wohnhaus der Anicca Pflege WG in der Pohlstraße, Berlin",
  },
] as const;

export default function GalleryEditorial() {
  return (
    <div className="filmstrip -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
      {PHOTOS.map((photo) => (
        <figure
          key={photo.src}
          className="relative h-[52vh] w-[88vw] shrink-0 snap-center overflow-hidden sm:h-[68vh] sm:w-[62vw] lg:w-[48vw]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            quality={90}
            sizes="(max-width: 640px) 85vw, 60vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/70 to-transparent px-5 py-5 text-sm text-paper-50">
            {photo.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
