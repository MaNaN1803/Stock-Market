import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Input() {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
  };

  let data = { message: messageRef.current.value };

  try {
    addDoc(ref, data);
  } catch (e) {
    console.log(e);
  }
  return (
    <div className=" ">
      <form onSubmit={handleSave}>
        <label htmlFor="">enter text</label>
        <input type="text" name="" id="" ref={messageRef} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
