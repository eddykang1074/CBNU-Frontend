//npm install @tailwindcss/forms
// plugins: [
//   // ...
//   require('@tailwindcss/forms'),
// ],

const Category = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-7">
      <div>
        <select
          id="location"
          name="location"
          defaultValue="분류선택"
          className="mt-2 block w-80 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option>분류선택</option>
          <option>노트북</option>
          <option>TV</option>
          <option>냉장고</option>
        </select>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    제품번호
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    제품명
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    제조사
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    가격
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    선택
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    20240101-0001
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    삼성 노트북 2024 갤럭시북4 NT750XGR-A51A
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    삼성전자
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    939,000원
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button
                      type="button"
                      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      선택
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
