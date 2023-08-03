import { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";
import Modal from "./components/Modal";
import React from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function messageBox(title: string, text: string, icon: string) {
  const mySwal = withReactContent(Swal);

  void mySwal.fire({
    title: title,
    text: text,
    icon: icon,
  });
}

function App() {
  const [data, setData] = useState({});
  const [list, setList] = useState<unknown[]>([]);
  const [idEdit, setIdEdit] = useState(-1);
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const mySwal = withReactContent(Swal);

  const addToDo = (e: {
    preventDefault: () => void;
    target: { reset: () => void };
  }) => {
    e.preventDefault();

    const show = [...list, data];
    setList(show);
    e.target.reset();
  };

  function updateToDo(e: { preventDefault: () => void }) {
    e.preventDefault();
    setShowModal(false);
    const updatedData = [...list];
    updatedData[idEdit].title = title;
    updatedData[idEdit].description = description;
    setList(updatedData);
  }

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemove = (index: string) => {
    // setList((current) => current.filter((list) => list.title !== title)); //Other Approach  - Remove by Title
    mySwal
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

  const handleEdit = (data, index: string) => {
    setIdEdit(index);
    setShowModal(true);
    setTitle(data.title);
    setDescription(data.description);
  };
  return (
    <>
      <div className="container mx-auto m-0 bg-black min-h-screen max-w-full">
        <div className="grid grid-cols-12 font-mono  text-center h-[100vh] antialiased ">
          <List
            list={list}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
            handleChange={handleChange}
          />
          <Add data={data} addToDo={addToDo} handleChange={handleChange} />
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
    </>
  );
}

export default React.memo(App);
