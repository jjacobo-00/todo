interface Props {
  setShowModal: (bool: boolean) => void;
  title: () => string;
  setTitle: (e: React.ChangeEvent<HTMLInputElement>) => string;
  description: () => string;
  setDescription: () => string;
  updateToDo: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Modal({
  setShowModal,
  title,
  setTitle,
  description,
  setDescription,
  updateToDo,
}: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            {/* <form onSubmit={updateToDo}> */}
            <div className="relative p-6 flex-auto">
              <input
                onChange={(e) => setTitle(e.target.value)}
                name="update-title"
                className="appearance-none block w-full p-2.5 bg-gray-50 text-gray-700 border rounded-lg border-gray-300 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2"
                id="update-title"
                type="text"
                placeholder="Enter Title"
                value={title}
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                name="update-description"
                className="appearance-none block w-full p-2.5 bg-gray-50 text-gray-700 border rounded-lg border-gray-300 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2"
                id="update-description"
                type="text"
                placeholder="Enter Title"
                value={description}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e) => updateToDo(e)}
              >
                Save Changes
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
