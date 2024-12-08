import Image from 'next/image'

const galleryImages = [
  {
    id: '1',
    src: '/images/left-cutted.png',
    alt: 'Modern shelf setup with plants',
    className: 'col-span-1 row-span-2'
  },
  {
    id: '2',
    src: '/images/laptop.png',
    alt: 'Minimalist workspace setup',
    className: 'col-span-2 row-span-1'
  },
  {
    id: '3',
    src: '/images/chair.png',
    alt: 'Vintage brown chair',
    className: 'col-span-1 row-span-1'
  },
  {
    id: '4',
    src: '/images/table1.png',
    alt: 'Decorative table setup',
    className: 'col-span-1 row-span-1'
  },
  {
    id: '5',
    src: '/images/table2.png',
    alt: 'Modern dining room',
    className: 'col-span-2 row-span-2'
  },
  {
    id: '6',
    src: '/images/bed.png',
    alt: 'Contemporary bedroom setup',
    className: 'col-span-2 row-span-2'
  },
  {
    id: '7',
    src: '/images/kitchen.png',
    alt: 'Modern kitchen counter',
    className: 'col-span-2 row-span-2'
  },
  {
    id: '8',
    src: '/images/artwall.png',
    alt: 'Decorative wall art',
    className: 'col-span-1 row-span-1'
  },
  {
    id: '9',
    src: '/images/showpiece.png',
    alt: 'Wall mounted shelf',
    className: 'col-span-1 row-span-1'
  }
]

export default function Furniture() {
  return (
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#3A3A3A] text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            Share your setup with
          </h2>
          <p className="text-[#616161] text-3xl md:text-4xl lg:text-5xl font-bold">
            #FuniroFurniture
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-6 gap-4 auto-rows-[250px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative aspect-square overflow-hidden rounded-lg ${
                image.id === '2' || image.id === '5' || image.id === '6' || image.id === '7'
                  ? 'col-span-2'
                  : 'col-span-1'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

