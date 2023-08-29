import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  const handleRemoveClick = () => {
    props.onRemoveTodo(props.text);
  };

  return (
    <li className={classes.item} key={props.text} onClick={handleRemoveClick}>
      {props.text}
    </li>
  );
};

export default TodoItem;
