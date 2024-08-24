import React, { useState } from "react";

export function Card({name, age, txt}) {
    const [num, setNum] = useState(0)


    // const handleClick = () => {
    //     setNum(num + 1)
    // }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
         Bu adamin {age} yasi var. Isi gucu {txt}dir. {num}
        </p>
        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>Add</button>
        <button className="btn btn-primary" onClick={() => setNum(num - 1)}>Minus</button>
      </div>
    </div>
  );
}


