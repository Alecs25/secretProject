import { useState, useRef, useEffect } from "react";
import DownArrow from "../assets";
import UpArrow from "../assets";
import { Action } from "./Action";
import useNode from "../hooks/useNode";

export function Comment({
  Comment,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
})
 {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };
  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  const onAddComment = () => {
    if (edit) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      showInput(false);
      setInput("");
    }
    if (edit) setEdit(false);
  };

  return (
    <div>
      <div className={Comment.id == 1 ? "inputContainer" : "commentContainer"}>
        {Comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input "
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />
            <Action className="reply comment" type="COMMENT" />
          </>
        ) : (
          <>
            <span style={{ wordWrap: "break-word" }} ref={inputRef}>
              {Comment.name}
            </span>

            <div
              contentEditable={edit}
              suppressContentEditableWarning={edit}
              style={{ display: "flex", marginTop: "5px" }}
            >
              {edit ? (
                <>
                  <Action
                    className="reply"
                    type="SAVE"
                    handleclick={onAddComment}
                  />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleclick={() => {
                      if (inputRef.current) {
                        inputRef.current.innerText = comment.name;
                      }
                      setEdit(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action className="reply comment" type="COMMENT" />
                  <Action
                    className="reply comment"
                    type="EDIT"
                    handleclick={() => {
                      setEdit(true);
                    }}
                  />
                  <Action
                    className="reply comment"
                    type="DELETE"
                    handleclick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput && (
            <div className="inputContainer">
              <input
                type="text"
                className="inputContainer__input first_input "
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type..."
              />
              <Action
                className="reply"
                type={
                  <>
                    {expand ? (
                      <UpArrow width="10px" height="10px" />
                    ) : (
                      <DownArrow width="10px" height="10px" />
                    )}
                  </>
                }
                handleclick={handleNewComment}
              />
              <Action
                className="reply"
                type="CANCEL"
                handleclick={() => {
                  showInput(false);
                }}
              />
            </div>
          )}
          {Comment?.items?.map((cmnt) => {
            return (
              <Comment
                key={cmnt.id}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                comment={cmnt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
