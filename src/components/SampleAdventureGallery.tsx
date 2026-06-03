import Image from "next/image";

const galleryImages = [
  {
    src: "/images/sample-adventure/friday-camp-setup.jpg",
    alt: "Campfire setup at a bush campsite on Friday evening",
    caption: "Friday Camp Setup",
  },
  {
    src: "/images/sample-adventure/scenic-drive.jpg",
    alt: "4WD vehicle on a scenic drive at sunset",
    caption: "Scenic High Country Drive",
  },
  {
    src: "/images/sample-adventure/woods-point-lunch.png",
    alt: "Beach camp setup with swag and 4WD near the coast",
    caption: "Lunch At Woods Point Hotel",
  },
  {
    src: "/images/sample-adventure/walhalla-sunday.png",
    alt: "Fishing at sunrise on Sunday morning",
    caption: "Sunday Morning In Walhalla",
  },
] as const;

function GalleryTile({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="group relative aspect-video overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 85vw, (max-width: 1199px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-3 pb-3 pt-10">
        <span className="font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

export function SampleAdventureGallery() {
  return (
    <div className="mt-6">
      {/* Desktop: 4 in a row (1200px+) */}
      <div className="hidden gap-4 min-[1200px]:grid min-[1200px]:grid-cols-4">
        {galleryImages.map((image) => (
          <GalleryTile key={image.caption} {...image} />
        ))}
      </div>

      {/* Tablet: 2x2 (768px–1199px) */}
      <div className="hidden grid-cols-2 gap-4 md:grid min-[1200px]:hidden">
        {galleryImages.map((image) => (
          <GalleryTile key={image.caption} {...image} />
        ))}
      </div>

      {/* Mobile: swipeable carousel */}
      <div className="md:hidden">
        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((image) => (
            <div
              key={image.caption}
              className="w-[85vw] max-w-sm shrink-0 snap-center"
            >
              <GalleryTile {...image} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-forest/50">
          Swipe to explore the weekend
        </p>
      </div>
    </div>
  );
}
