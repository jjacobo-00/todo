type List = {
  title: string;
  description: string;
};

interface Props {
  list: List[];
  handleRemove: (index: number) => void;
  handleEdit: (todo: List, index: number) => void;
}

function List({ list, handleRemove, handleEdit }: Props) {
  return (
    <>
      <div className="col-span-8 mt-8">
        <p className="text-xl font-extrabold text-white">List</p>
        <div className="list">
          <div className="card bg-white mt-10 mx-28 rounded-lg">
            <div className="grid grid-flow-row-dense">
              <div className="col-span-5">
                <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  How to add list in To-Do
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Put the desired title and description and press Add button
                </p>
              </div>
            </div>
          </div>

          {list.map(
            (todo: { title: string; description: string }, index: number) => {
              return (
                <div
                  className="card bg-white mt-10 mx-28 rounded-lg"
                  key={index}
                >
                  <div className="grid grid-flow-row-dense grid-cols-6">
                    <div className="col-span-5">
                      <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {todo.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {todo.description}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <button
                        onClick={() => {
                          handleEdit(todo, index);
                        }}
                        className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tr-lg inline-flex flex justify-center items-center"
                      >
                        <svg
                          className="fill-current w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          handleRemove(index);
                        }}
                        type="submit"
                        className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-br-lg inline-flex flex justify-center items-center"
                      >
                        <svg
                          className="fill-current w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* {showModal ? (
        <Modal
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          updateTodo={updateTodo}
          handleUpdateEdit={handleUpdateEdit}
        />
      ) : null} */}
    </>
  );
}

export default List;
