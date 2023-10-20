import React from "react";

const Img = React.forwardRef((props, ref) => {
  const { style, ...otherProps } = props;
  const imageStyle = {
    ...style,
    objectFit: "cover",
  };
  return (
    <img
      src="https://event.leagueoflegends.co.kr/chuseok2020/img/obj_roll_poro_01.png"
      alt=""
      ref={ref}
      style={imageStyle}
      {...otherProps}
    />
  );
});

export default Img;
