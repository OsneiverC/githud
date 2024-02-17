export default function Repositorios() {
  return (
    <>
      <div className="Repositorios hidden bg-transparent w-[70%] gap-5 py-10 px-5">
        <div className="flex gap-5">
          <input
            type="text"
            className="bg-transparent w-[70%] p-3 focus:border-blue-500 border-2 border-gray-700 focus:outline-none rounded-md"
            placeholder="find a repository"
          />
          <button className="p-3 bg-gray-700 rounded-md">Type</button>
          <button className="p-3 bg-gray-700 rounded-md">Lenguage</button>
          <button className="p-3 bg-gray-700 rounded-md">Sort</button>
          <button className="bg-green-500 text-white p-3 rounded-md flex justify-center items-center gap-2">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo fill-white"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            New
          </button>
        </div>






      <div>
        <div className="mt-10 rounded-md flex flex-col">
          <div className="flex flex-col py-[50px] gap-2 border-t-2 border-b-2 border-gray-700">

            <div className="flex">
            <h3 className="p-3 text-blue-500 hover:underline text-2xl">GitHub</h3>
            <span className="border-2 border-gray-700 py-1 px-3 rounded-full flex self-center text-gray-400">Public</span>
            </div>
            <div className="flex gap-2 px-3 opacity-[0.5]">
              <div className="rounded-full w-5 h-5 bg-yellow-400"></div>
              <h3>JavaScript</h3>
              <span className="ml-5">Updated 2 days ago</span>
            </div>
          </div>
        </div>
      </div>


      </div>

    </>
  );
}
