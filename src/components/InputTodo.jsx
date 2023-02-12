import React from "react";

// Todoを入力するためのコンポーネント
export const InputTodo = (props) => {
  // propsの分割代入
  const { todotext, onChange, onClick } = props;
  return (
    <div className="input-area">
      {/* Todoテキストのvalue(todotext),onChangeの関数,onClickの関数 */}
      <input placeholder="TODOを入力" value={todotext} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
