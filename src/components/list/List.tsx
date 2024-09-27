import style from "./List.module.css";

const items = [
  {
    icon: "./image/heart.png",
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: "./image/star.png",
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: "./image/eye.png",
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
export const List = ({ styleList }: { styleList: string }) => {
  return (
    <ul className={style[styleList]}>
      {items.map((item, i) => {
        return (
          <li key={i}>
            <img src={item.icon} alt="" />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
