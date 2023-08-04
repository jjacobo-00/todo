interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addToDo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Add: React.FC<Props> = ({
  addToDo,
  handleChange,
  handleChangeTextArea,
}) => {
  return (
    <>
      <form
        onSubmit={addToDo}
        className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4 3xl:col-span-4 max-h-screen border-l-2 border-white bg-white text-black"
      >
        <p className="text-2xl lg:text-3xl font-bold mt-7 lg:mt-32 xl:mt-32 2xl:mt-32 3xl:mt-32">
          TO-DO
        </p>
        <div className="flex flex-wrap">
          <div className="w-full px-3 mx-5 lg:m-5 xl:m-5 2xl:m-5 3xl:m-5">
            <label className="block uppercase tracking-wide text-black text-md font-bold mb-2 text-left">
              Title
            </label>
            <input
              name="title"
              onChange={(e) => handleChange(e)}
              className="appearance-none block w-full p-2.5 bg-gray-50 text-gray-700 border rounded-lg border-gray-300 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-black focus:border-2"
              id="title"
              type="text"
              placeholder="Enter Title"
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:mb-3 xl:mb-3 2xl:mb-3 3xl:mb-3">
          <div className="w-full px-3 m-5">
            <label className="block uppercase tracking-wide text-black text-md font-bold mb-2 text-left">
              Description
            </label>
            <textarea
              name="description"
              // onChange={(e) => handleChange(e)}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChangeTextArea(e)
              }
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-black focus:border-2"
              placeholder="Enter description"
            ></textarea>
            <p className="text-md italic text-black text-xs sm:text-sm lg:text-sm">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3 lg:m-5 xl:m-5 2xl:m-5 3xl:m-5">
            <button className="flex justify-center bg-gray-700 hover:bg-black text-white font-bold py-2 px-4 items-center w-full rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="fill-current w-4 h-4 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Add;
