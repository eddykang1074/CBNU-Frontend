import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';

// npm install @headlessui/react@latest
// npm install @heroicons/react
// npm install @tailwindcss/forms
// npm install @tailwindcss/aspect-ratio

// tailwind.config.js
// module.exports = {
//   plugins: [
//     require('@tailwindcss/forms'),
//     require("@tailwindcss/aspect-ratio"),
//   ],
// }

const product = {
  name: 'Zip Tote Basket',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
  imageAlt: 'Back angled view with bag open and handles to the side.',
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    rating: 3.9,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
    description:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
      },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      {
        name: 'Washed Gray',
        bgColor: 'bg-gray-500',
        selectedColor: 'ring-gray-500',
      },
    ],
  },
  {
    id: 2,
    name: 'Zip High Wall Tote',
    color: 'White and blue',
    rating: 3.9,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$150',
    description:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
      },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      {
        name: 'Washed Gray',
        bgColor: 'bg-gray-500',
        selectedColor: 'ring-gray-500',
      },
    ],
  },
  {
    id: 3,
    name: 'Halfsize Tote',
    color: 'Clay',
    rating: 3.9,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
    description:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
      },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      {
        name: 'Washed Gray',
        bgColor: 'bg-gray-500',
        selectedColor: 'ring-gray-500',
      },
    ],
  },
  {
    id: 4,
    name: 'High Wall Tote',
    color: 'Black and orange',
    rating: 3.9,
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-04.jpg',
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
    description:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls',
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
      },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      {
        name: 'Washed Gray',
        bgColor: 'bg-gray-500',
        selectedColor: 'ring-gray-500',
      },
    ],
  },
];

const UseEffect = () => {
  const [open, setOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Product List</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  View<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {product.name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-3"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">{product.price}</p>

                      {/* Reviews */}
                      <div className="mt-3">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map(rating => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  product.rating > rating
                                    ? 'text-gray-400'
                                    : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0',
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="sr-only">Description</h4>

                        <p className="text-sm text-gray-700">
                          {product.description}
                        </p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-6">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-600">
                            Color
                          </h4>

                          <fieldset
                            aria-label="Choose a color"
                            className="mt-2"
                          >
                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="flex items-center space-x-3"
                            >
                              {product.colors.map(color => (
                                <Radio
                                  key={color.name}
                                  value={color}
                                  aria-label={color.name}
                                  className={classNames(
                                    color.selectedColor,
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.bgColor,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10',
                                    )}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>
                        </div>

                        <div className="mt-6">
                          <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UseEffect;
