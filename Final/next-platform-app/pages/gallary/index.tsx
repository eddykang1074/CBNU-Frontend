const Gallary = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto mt-8 max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="m-5 text-center">
          <h1 className="text-2xl font-bold">생성형 이미지 활용하기</h1>
        </div>
        <form className="flex">
          <select
            id="model"
            name="model"
            className="block w-[250px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Dalle.2</option>
            <option>Dalle.3</option>
          </select>
          <input
            id="prompt"
            name="prompt"
            type="text"
            className="block ml-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="rounded-md ml-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </form>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <a href="#" className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src="https://image.dongascience.com/Photo/2023/03/a5f212448bf805ac355e3ac2b1817c22.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">
              이미지를 만들어줘
            </h3>
            <p className="italic text-gray-500">Dalle.3</p>
            <p className="mt-2 font-medium text-gray-900">Eddy</p>
          </a>

          <a href="#" className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src="https://image.dongascience.com/Photo/2023/03/a5f212448bf805ac355e3ac2b1817c22.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">
              이미지를 만들어줘
            </h3>
            <p className="italic text-gray-500">Dalle.3</p>
            <p className="mt-2 font-medium text-gray-900">Eddy</p>
          </a>

          <a href="#" className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src="https://image.dongascience.com/Photo/2023/03/a5f212448bf805ac355e3ac2b1817c22.jpg"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">
              이미지를 만들어줘
            </h3>
            <p className="italic text-gray-500">Dalle.3</p>
            <p className="mt-2 font-medium text-gray-900">Eddy</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
