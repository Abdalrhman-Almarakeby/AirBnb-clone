import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import cardsData from "./data";
import Card from "./components/Card";

export default function App() {
  const Cards = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
        location={card.location}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {/*  */}
        {Cards}
      </section>
    </>
  );
}
