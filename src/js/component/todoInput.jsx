import React, { useState } from "react";

export const TodoInput = ({ data, setData, setTask }) => {
  return (
    <input
      className="TodoInput"
      type="text"
      placeholder="Escribe una tarea nueva"
      value={data}
      onChange={(event) => {
        setData(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key == "Enter") {
          if (data == "") {
            return alert("No hay ninguna tarea que registrar");
          } else {
            setData("");
            setTask((prev) => {
              return [...prev, data];
            });
          }
        }
      }}
    />
  );
};
