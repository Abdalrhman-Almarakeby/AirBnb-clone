import starIcon from "/icons/star.svg";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots,
  location,
}) {
  let badgeText;

  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {/*
      TODO: Resize the third and the last images height from 235px to 233.66px 
            to mach the other images 
      */}
      <img src={`/images/${img}`} alt="Mountain Bike" />
      {badgeText && <span className="status">{badgeText}</span>}
      <div className="rating-info">
        <img src={starIcon} alt="Star Icon" />
        <span className="rating">{rating}</span>
        <span>({reviewCount}) . </span>
        <span>{country}</span>
      </div>
      <p className="title">{title}</p>
      <p className="cost">
        From $ {price} / <span>person</span>
      </p>
    </div>
  );
}
