import Image from "next/image";

const founderPhotos = [
  {
    src: "/images/founder/photo-1.png",
    alt: "Founder campfire at a weekend campsite",
  },
  {
    src: "/images/founder/photo-2.png",
    alt: "Founder 4WD on the beach at sunset",
  },
  {
    src: "/images/founder/photo-3.png",
    alt: "Founder swag and 4WD camp setup on the beach",
  },
  {
    src: "/images/founder/photo-4.png",
    alt: "Founder fishing at sunset",
  },
] as const;

function FounderPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1199px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
}

export function FounderGallery() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 min-[1200px]:grid-cols-4">
      {founderPhotos.map((photo) => (
        <FounderPhoto key={photo.src} {...photo} />
      ))}
    </div>
  );
}
