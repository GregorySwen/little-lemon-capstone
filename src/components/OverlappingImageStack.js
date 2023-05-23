export default function OverlappingImageStack(props) {
  const imgWidth = 272;
  const imgHeight = 338;
  const imgFractions = 13;
  const overlapFractions = 5;
  const paddingBottom = 0.3;
  const getStackStyle = () => {
    if (!props.imgs || props.imgs.length < 2) {
      return {};
    }
    return {
      width: `${
        imgWidth *
        (props.imgs.length -
          ((props.imgs.length - 1) * overlapFractions) / imgFractions)
      }px`,
      height: `${imgHeight * (1 + paddingBottom)}px`,
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: `repeat(${
        props.imgs.length * imgFractions -
        (props.imgs.length - 1) * overlapFractions
      }, 1fr)`,
      gridTemplateRows: "1fr",
    };
  };
  const getImgStyle = (idx) => {
    return {
      gridColumn: `${
        idx * (imgFractions - overlapFractions) + 1
      } / span ${imgFractions}`,
      gridRow: "1/2 ",
      paddingTop: idx % 2 === 0 ? `${paddingBottom * 100}%` : "0",
      objectFit: "cover",
      zIndex: idx,
    };
  };
  const getImages = () => {
    return props.imgs.map((img, idx) => (
      <img
        key={img + idx}
        src={img.src}
        alt={img.alt}
        width={`${imgWidth}px`}
        height={`${imgHeight}px`}
        style={getImgStyle(idx)}
      ></img>
    ));
  };
  return (
    props.imgs &&
    props.imgs.length > 0 && (
      <div className="img-stack" style={getStackStyle()}>
        {getImages()}
      </div>
    )
  );
}
