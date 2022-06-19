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
      name: 'Resep Rendang Kentang Jamur',
      href: '#',
      imageSrc: 'https://www.royco.co.id/content/dam/unilever/global/recipe_image/228/22868/228684-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   color: 'Black',
    },
    {
        id: 1,
        name: 'Resep Capcay',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/global/recipe_image/230/23029/230291-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
      //   imageAlt: "Front of men's Basic Tee in black.",
      //   price: '$35',
      //   color: 'Black',
      },
      {
        id: 1,
        name: 'Resep Sup Ayam Lezat',
        href: '#',
        imageSrc: 'https://www.royco.co.id/content/dam/unilever/global/recipe_image/230/23046/230461-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
      //   imageAlt: "Front of men's Basic Tee in black.",
      //   price: '$35',
      //   color: 'Black',
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-red-600 text-center">Resep Terbaru</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  