"use client";
// fetch(""url).then(response=>response.json()).then(data=>console.log(data)
export default function pageUsuarios() {
  return (
    <>
      <div className="bg-black relative">
        <header className="bg-black w-full flex flex-col gap-5 p-5">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div
                onClick={() => {
                  document.querySelector(".menu").classList.remove("hidden");
                }}
                className="p-3 border-2 border-gray-500 rounded-md hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-menu-2 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </div>
              {/* MENU  */}
              <div className="menu bg-[#161B22] hidden w-[20%] h-screen absolute left-0 top-0 z-[1000] rounded-lg p-5 border-2 border-gray-700">
                <div className="relative ">
                  <svg
                    height="48"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="48"
                    data-view-component="true"
                    class="octicon octicon-mark-github fill-white"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>

                  <div
                    onClick={() => {
                      document.querySelector(".menu").classList.add("hidden");
                    }}
                    className="p-3 hover:bg-gray-800 absolute right-0 top-4 rounded-md cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-x fill-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                {/* MENU FLOTANTE */}
                <div className="p-5">
                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-home fill-gray-500"
                    >
                      <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Home</h3>
                  </div>

                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-issue-opened fill-gray-500"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Issues</h3>
                  </div>

                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-git-pull-request fill-gray-500"
                    >
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Pull requests</h3>
                  </div>

                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-table fill-gray-500"
                    >
                      <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Projects</h3>
                  </div>
                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-comment-discussion fill-gray-500"
                    >
                      <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Discussions</h3>
                  </div>

                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-codespaces fill-gray-500"
                    >
                      <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path>
                      <path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Codespace</h3>
                  </div>
                  <hr className="opacity-[0.2] my-2" />
                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-telescope fill-gray-500"
                    >
                      <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Explore</h3>
                  </div>

                  <div className="flex gap-3 items-center hover:bg-gray-800 p-3 rounded-md cursor-pointer">
                    <svg
                      aria-hidden="true"
                      height="26"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="26"
                      data-view-component="true"
                      class="octicon octicon-gift fill-gray-500"
                    >
                      <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
                    </svg>

                    <h3 className="opacity-[0.5] text-lg">Marketplace</h3>
                  </div>
                  <hr className="opacity-[0.2] my-2" />
                  {/* REPOSITORIOS */}
                  <div>
                    <div className="flex justify-between">
                      <h4 className="opacity-[0.5]">Repositories</h4>
                      <svg
                        aria-hidden="true"
                        height="26"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="26"
                        data-view-component="true"
                        class="octicon octicon-search Button-visual fill-gray-500"
                      >
                        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                      </svg>
                    </div>

                    <div>{/* TODOS LOS REPOSITORIOS CONSUMIDOS LA API  */}</div>
                  </div>

                  <p className="opacity-[0.5]">© 2024 GitHub, Inc.</p>

                  <ul className="flex flex-wrap gap-1 text-blue-800 cursor-pointer">
                    <li className="hover:underline">About</li>
                    <li className="hover:underline">Blog</li>
                    <li className="hover:underline">Terms</li>
                    <li className="hover:underline">Privacy</li>
                    <li className="hover:underline">Security</li>
                    <li className="hover:underline">Status</li>
                    <li className="hover:underline">
                      Do not share my personal information
                    </li>
                    <li className="hover:underline">Manage Cookies</li>
                  </ul>
                </div>
              </div>

              <svg
                height="48"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="48"
                data-view-component="true"
                class="octicon octicon-mark-github fill-white"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>

              <div>
                <h3 className="hover:bg-gray-800 rounded-md p-3">OsneiverC/</h3>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex justify-center items-center border-2 border-gray-500 rounded-md px-3 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search fill-gray-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
                <input 
                  type="text"
                  placeholder="Type / to Search"
                  className=" p-3 bg-transparent w-[400px] focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-terminal hover:bg-gray-800 rounded-md"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 7l5 5l-5 5" />
                  <path d="M12 19l7 0" />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-plus"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-caret-down"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 10l6 6l6 -6h-12" />
                  </svg>
                </div>

                <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                  <svg
                    aria-hidden="true"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    class="octicon octicon-issue-opened Button-visual fill-gray-300"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                  </svg>
                </div>
                <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                  <svg
                    aria-hidden="true"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    class="octicon octicon-git-pull-request Button-visual fill-gray-300"
                  >
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                  </svg>
                </div>

                <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                  <svg
                    aria-hidden="true"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    class="octicon octicon-inbox Button-visual fill-gray-300"
                  >
                    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
              <svg
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-book UnderlineNav-octicon fill-gray-500 "
              >
                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
              </svg>
              <h3 className="opacity-[0.5]">Overview</h3>
            </div>

            <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
              <svg
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-repo UnderlineNav-octicon fill-gray-500"
              >
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <h3 className="opacity-[0.5]">Repositories</h3>
            </div>

            <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
              <svg
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-table UnderlineNav-octicon fill-gray-500"
              >
                <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
              </svg>
              <h3 className="opacity-[0.5]">Projects</h3>
            </div>

            <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
              <svg
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-package UnderlineNav-octicon fill-gray-500"
              >
                <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
              </svg>
              <h3 className="opacity-[0.5]">Packages</h3>
            </div>

            <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
              <svg
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-star UnderlineNav-octicon fill-gray-500"
              >
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
              </svg>
              <h3 className="opacity-[0.5]">Stars</h3>
            </div>
          </div>
        </header>

        {/* SAI  */}
        <div className="bg-[#161B22] h-screen flex px-[10%]">
          <div className="flex flex-col p-5">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"></img>
            <h2 className="text-4xl p-3">Nombre General</h2>
            <h3 className="text-2xl px-3 opacity-[0.5] mb-5">Usuario</h3>
            <button className="bg-gray-700 p-3 font-bold rounded-md">
              Edit profile
            </button>
            <div className="my-5 flex gap-5">
              <svg
                text="muted"
                aria-hidden="true"
                height="26"
                viewBox="0 0 16 16"
                version="1.1"
                width="26"
                data-view-component="true"
                class="octicon octicon-people fill-gray-500"
              >
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
              </svg>
              <div className="flex gap-3 text-lg">
                <span>0</span>
                <p>followers</p>
              </div>
              <div className="flex gap-3 text-lg">
                <span>2</span>
                <p>followers</p>
              </div>
            </div>
          </div>
          {/* MAIN  */}
          <div className="my-20 w-[70%] p-5">
            <div>
              <div className="flex justify-between w-full relative">
                <h3 className="text-2xl">Popular repositories</h3>
                <h3 className="text-blue-600 hover:underline absolute right-0">
                  Customize your pins
                </h3>
              </div>

              {/* RECUADROS DE PROYECTOS  */}
              <div className="flex gap-5 mt-5">
              {/* RECUADRO  */}
                <div className="border-2 border-gray-600 w-[50%] h-[160px] rounded-md p-5 relative">
                  <h3 className="text-2xl text-blue-600 hover:underline">
                    Nombredelproyecto
                  </h3>
                  <div className="absolute right-7 top-5 border-2 border-gray-600 px-3 py-2 rounded-full">
                    Estado
                  </div>

                  <div className="flex items-center gap-4 mt-10">
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-600 w-[20px] h-[20px] mr-2"></div>
                      <span className="">Lenguaje</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        aria-label="star"
                        role="img"
                        height="26"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="26"
                        data-view-component="true"
                        class="octicon octicon-star fill-gray-500"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                      <span>0</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-600 w-[50%] h-[160px] rounded-md p-5 relative">
                  <h3 className="text-2xl text-blue-600 hover:underline">
                    Nombredelproyecto
                  </h3>
                  <div className="absolute right-7 top-5 border-2 border-gray-600 px-3 py-2 rounded-full">
                    Estado
                  </div>

                  <div className="flex items-center gap-4 mt-10">
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-600 w-[20px] h-[20px] mr-2"></div>
                      <span className="">Lenguaje</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        aria-label="star"
                        role="img"
                        height="26"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="26"
                        data-view-component="true"
                        class="octicon octicon-star fill-gray-500"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                      <span>0</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
