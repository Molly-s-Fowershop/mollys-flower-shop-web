type EmblaSlideProps = {
  children: React.ReactNode;
};

export default function EmblaSlide({ children }: EmblaSlideProps) {
  return (
    <div className="embla__slide">
      <div className="embla__slide__card">{children}</div>
    </div>
  );
}
