/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Bahan-Bahan',
      href: '#',
      imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/general_image/savoury/other_savoury/sup_krim_ayam_brokoli-941691.jpg.ulenscale.460x460.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   color: 'Black',
    },
    {
        id: 1,
        name: 'Acara',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/pack_shot/hero_image/savoury/all/bakso_udang_rebus-878208.jpg.ulenscale.460x460.jpg',
      //   imageAlt: "Front of men's Basic Tee in black.",
      //   price: '$35',
      //   color: 'Black',
      },
      {
        id: 1,
        name: 'Jenis Masakan',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/pack_shot/hero_image/savoury/all/tips-memasak-ikan-panggang-883865.jpg.ulenscale.460x460.jpg',
      //   imageAlt: "Front of men's Basic Tee in black.",
      //   price: '$35',
      //   color: 'Black',
      },
      {
        id: 1,
        name: 'Tingkat kesulitan',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/pack_shot/hero_image/savoury/all/omelet_gede-883611.png.ulenscale.460x460.png',
      //   imageAlt: "Front of men's Basic Tee in black.",
      //   price: '$35',
      //   color: 'Black',
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-red-600">Apa yang kamu cari?</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  