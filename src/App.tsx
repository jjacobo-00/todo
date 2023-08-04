import { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";
import Modal from "./components/Modal";
import React from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const [data, setData] = useState<List>({ title: "", description: "" });
  const [list, setList] = useState<List[]>([]);
  const [idEdit, setIdEdit] = useState<number>(-1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const mySwal = withReactContent(Swal);

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData: List = {
      // Specify the correct type here
      title: data.title,
      description: data.description,
    };

    const updatedList = [...list, newData];
    setList(updatedList);

    e.currentTarget.reset(); // Using currentTarget instead of target
  };

  function updateToDo(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(false);

    const updatedData = [...list];
    updatedData[idEdit] = {
      ...updatedData[idEdit],
      title: title,
      description: description,
    };

    setList(updatedData);
  }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: {
    target: { name: string; value: string };
  }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemove = (index: number) => {
    // setList((current) => current.filter((list) => list.title !== title)); //Other Approach  - Remove by Title
    void mySwal
      .fire({
        title: "Remove?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Accept",
      })
      .then((result) => {
        if (result.isConfirmed) {
          setList([...list.slice(0, index), ...list.slice(index + 1)]);
        }
      });
  };

  const handleEdit = (data: List, index: number) => {
    // Specify the type for data
    setIdEdit(index);
    setShowModal(true);
    setTitle(data.title);
    setDescription(data.description);
  };

  return (
    <div className="container mx-auto m-0 bg-black min-h-screen max-w-full">
      <div className="grid grid-cols-12 font-mono  text-center h-[100vh] antialiased ">
        <List list={list} handleRemove={handleRemove} handleEdit={handleEdit} />
        <Add
          addToDo={addToDo}
          handleChange={handleChange}
          handleChangeTextArea={handleChangeTextArea}
        />
        {showModal ? (
          <Modal
            setShowModal={setShowModal}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            updateToDo={updateToDo}
          />
        ) : null}
      </div>
    </div>
  );
}

export default React.memo(App);
