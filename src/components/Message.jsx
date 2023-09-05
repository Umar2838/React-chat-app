import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  console.log(message)
  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar ">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header font-bold">
          {message.name}
        </div> 
        <div className="chat-bubble font-medium text-black font-mono bg-sky-400">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
