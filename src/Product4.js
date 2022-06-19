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
      name: 'Royco Bumbu',
      href: '#',
      imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/bahasa_indonesia/general_image/ayam-bumbu-rujak-1957338-png.png.ulenscale.460x460.png',
    },
    {
        id: 1,
        name: 'Sup Krim',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/bahasa_indonesia/general_image/sup-krim-ayam-1957336-png.png.ulenscale.460x460.png',
      },
      {
        id: 1,
        name: 'Royco Kaldu',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/bahasa_indonesia/photography_and_pictures/royco-kaldu-ayam-100gr-new-32765019-png.png.ulenscale.460x460.png',
      },
      {
        id: 1,
        name: 'Kaldu Tanpa Penguat Rasa',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/bahasa_indonesia/pack_shot/kaldu-spesial-70228961-png.png.ulenscale.460x460.png',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-red-600">Apa yang kamu cari</h2>
  
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
  