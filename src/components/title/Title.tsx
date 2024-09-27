import style from "./Title.module.css";

type HeadingProp = {
  children: React.ReactNode;
  styleHeading: string;
  tag?: keyof JSX.IntrinsicElements;
};
export const Title = ({
  children,
  styleHeading,
  tag: Tag = "h1",
}: HeadingProp) => {
  return <Tag className={style[styleHeading]}>{children}</Tag>;
};
