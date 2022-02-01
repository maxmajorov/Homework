import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
  name: "Maxim",
  message: "Hello! I'm React developer!",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
