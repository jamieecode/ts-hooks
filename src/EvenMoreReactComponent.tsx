// export function Heading({ title }: { title: string }) {
//   return <h3>{title}</h3>;
// }

// const EvenMoreReactComponent = () => {
//   return (
//     <div>
//       <Heading title="hello" />
//     </div>
//   );
// };

// export default EvenMoreReactComponent;

import { ReactElement, ReactNode } from "react";

//interface
export interface HeadingProps {
  title: string;
}
export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

export const List: <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

const EvenMoreReactComponent = () => {
  return (
    <div>
      <Heading title="hello" />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
};

export default EvenMoreReactComponent;
