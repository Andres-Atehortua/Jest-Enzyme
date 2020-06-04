import React from "react";

const List = ({ title, list }) => {
  return (
    <section>
      <h2 className="big">{title}</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default List;
