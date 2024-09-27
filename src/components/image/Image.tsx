import style from "./Image.module.css";
export const Image = ({
  styleImage,
  path,
  alt,
}: {
  styleImage: string;
  path: string;
  alt: string;
}) => {
  return <img className={style[styleImage]} src={path} alt={alt} />;
};
