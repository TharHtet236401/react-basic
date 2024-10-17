import ListGroup from "./components/ListGroup";

const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

const clickHere = () => {
  console.log("Clicked here");
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
        onClickItem={clickHere}
      />
    </div>
  );
}

export default App;
