import React, { useEffect, useState } from "react";
import { firebaseDB } from "./firebase";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebaseDB.ref("path/to/data").once("value");
        const json = snapshot.val();
        const value1 = json.value1; // Access the first value
        const value2 = json.value2; // Access the second value
        setData({ value1, value2 });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  let sum1 = 0;
  avg_price.forEach((num) => {
    sum1 += num;
  });

  const mean = sum1 / avg_price.length;
  const varience =
    avg_price.reduce((acc, val) => (val - mean) ** 2, 0) / avg_price.length;

  const std_dev = Math.sqrt(varience);
  const expArray = avg_price.map((value) => {
    const exp = ((Math.random() * 100 - mean) * 2) / 2(varience ** 2);
    return exp;
  });

  const formArray = expArray.map((exp) => {
    const form = (1 / (2 * Math.PI * varience)) * 0.5 * Math.E * -exp;
    return form;
  });

  console.log("Mean:", mean);
  console.log("Var:", varience);
  console.log("std:", std_dev);
  console.log("exponential Array:", expArray);
  console.log("Formula array:", formArray);
  return (
    <div>
      {data && (
        <div>
          <p>Value 1: {data.value1}</p>
          <p>Value 2: {data.value2}</p>
        </div>
      )}
    </div>
  );
};

export default Fetchdata;
