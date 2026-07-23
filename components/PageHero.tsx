type Props = {
  title: string;
  background?: string;
};

export default function PageHero({
  title,
  background = "/images/page-top-bg/1.jpg",
}: Props) {
  return (
    <section
      className="page-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${background})`,
      }}
    >
      <div className="container">
        <h2>{title}</h2>
      </div>
    </section>
  );
}
