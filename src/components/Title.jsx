import { useEffect, useState } from "react";

const Title = () => {
  const home = [
    "Home",
    "First things first, Amarilliss",
    "Good morning, Batman",
    "I give it a light to decent 4",
    "Only the dead can know peace from this fun",
    "Call your mom",
    "G'day, mate",
  ];
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle(home[Math.floor(Math.random() * home.length)]);
  }, []);
  return <h1 className="text-4xl font-bold underline text-center py-8 text-gray-200">{title}</h1>;
};

export default Title;
