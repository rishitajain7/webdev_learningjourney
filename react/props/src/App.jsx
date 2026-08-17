import Card from "./components/Card";
import "./App.css";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq0KV-_JxhxwRW5q7mIAC8JY4fjKiGcmauhW79TdadQ&s=10",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvbDwmdzgyFiX2rBSrNeUR6v4OgBaVK59a4-D6RGOeA&s=10",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_PHuySTyzykquJWai9WgBrc1VilMTYHFP-cVQBbjsw&s=10",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZyZhgR7A1JBW14HaHk1Q56mCYiqFTH7tqwIHVadQ_g&s=10",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GVL4-FsuDuXJ5NHtNOgFdEXv5jo6eUVpH2p7tAX5tA&s=10",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This card is awesome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIay_AVuLLJX1-232tGPZJIz7epXtEMKtJGxnIFg2rZg&s=10",
  },
];

function App() {
  return (
    <div className="app">
      <h1>All the cards are here.</h1>

      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;