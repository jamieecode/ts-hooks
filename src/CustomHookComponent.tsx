import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

//Generic
function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: Payload) => {
        setData(d);
        setDone(true);
      });
  }, [url]);
  return { data, done };
}

const CustomHookComponent = () => {
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );
  return (
    <div>
      <div>{done && <img src={data![0].logo} alt="Beverage logo" />}</div>
      <div>
        {portlandTaps.length && (
          <img src={portlandTaps![1].logo} alt="Beverage logo" />
        )}
      </div>
    </div>
  );
};

export default CustomHookComponent;

// function useFetchData(url: string): { data: Beverage[] | null; done: boolean } {
//   const [data, setData] = useState<Beverage[] | null>(null);
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((d: Beverage[]) => {
//         setData(d);
//         setDone(true);
//       });
//   }, [url]);
//   return { data, done };
// }

// const CustomHookComponent = () => {
//   const { data, done } = useFetchData("/hv-taplist.json");
//   return <div>{done && <img src={data![0].logo} alt="Beverage logo" />}</div>;
// };

// export default CustomHookComponent;
