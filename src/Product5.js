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
      name: 'Royco Kaldu Sapi Sachet',
      href: '#',
      imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/bahasa_indonesia/photography_and_pictures/royco-sapi-8gr-31816445-png.png.ulenscale.400x400.png',
    },
    {
        id: 1,
        name: 'Royco Kaldu Sapi Medium Pack',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/bahasa_indonesia/pack_shot/royco-kaldu-sapi-medium-pack-68426216-png.png.ulenscale.400x400.png',
      },
      {
        id: 1,
        name: 'Royco Kaldu Sapi Big Pack',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/indonesia/bahasa_indonesia/pack_shot/royco-kaldu-sapi-big-pack-68426104-png.png.ulenscale.400x400.png',
      },
      {
        id: 1,
        name: 'Royco Kaldu Ayam Sachet',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/knorr_world/global/bahasa_indonesia/photography_and_pictures/royco-ayam-8gr-31816444-png.png.ulenscale.400x400.png',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-red-600">Kaldu</h2>
  
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
                    <h3 className="text-sm text-red-600">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">Cek Sekilas</button>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    )
  }
  