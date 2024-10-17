import { Fragment, MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  onClickItem: () => void;
}

function ListGroup({ items, heading, onSelectItem, onClickItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //items = [];

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              onClickItem();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
