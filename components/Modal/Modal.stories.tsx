import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Modal Content</h2>
        <p>Some interesting text here.</p>
      </Modal>
    </div>
  );
};
