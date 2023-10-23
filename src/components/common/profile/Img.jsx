import React, { useEffect, useRef, useState } from "react";

const path = process.env.PUBLIC_URL;

function Img(props) {
  const refElWidth = useRef(null);
  const [Width, setWidth] = useState(0);

  useEffect(() => {
    // 첫 렌더 시 width값 0 나오는 것을 방지
    const getWidth = () => refElWidth.current.offsetWidth;

    const handleResize = () => setWidth(getWidth());

    if (refElWidth.current) setWidth(getWidth());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [refElWidth]);

  return (
    <img
      src={`${path}/img/ProfileIMG.png`}
      ref={refElWidth}
      style={{ height: `${Width}px` }}
      alt=""
      {...props}
    />
  );
}

export default Img;
