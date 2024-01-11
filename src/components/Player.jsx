import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [editing, setEditing] = useState(false);
  const [changeName, setChangeName] = useState(name);
  const handleEditClick = () => {
    setEditing((edit) => !edit);
    if (editing) {
      onChangeName(symbol, changeName);
    }
  };
  const handleChangeName = (e) => {
    setChangeName(e.target.value);
  };
  return (
    <li className={isActive ? 'active' : undefined}>
      {editing ? (
        <input
          className="player-input"
          type="text"
          value={changeName}
          onChange={handleChangeName}
        />
      ) : (
        <span className="player-name"> {changeName}</span>
      )}

      <span className="player-symbol"> {symbol} </span>
      <button onClick={handleEditClick}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
