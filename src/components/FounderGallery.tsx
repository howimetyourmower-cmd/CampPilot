import Image from "next/image";

const founderPhotos = [
  {
    src: "/images/founder/photo-1.jpg",
    alt: "Founder camping adventure photo 1",
  },
  {
    src: "/images/founder/photo-2.jpg",
    alt: "Founder camping adventure photo 2",
  },
  {
    src: "/images/founder/photo-3.png",
    alt: "Founder camping adventure photo 3",
  },
  {
    src: "/images/founder/photo-4.png",
    alt: "Founder camping adventure photo 4",
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
