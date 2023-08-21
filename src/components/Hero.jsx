import heroSectionImg from "/images/Hero-section-img.webp";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroSectionImg} alt="Hero section image" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
