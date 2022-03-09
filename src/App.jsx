import { useEffect, useState, useContext } from "react";
import Gallery from "./gallery/Gallery";
// import { GlobalContext } from './context/GlobalState'
import Header from "./Header/Header";
import robot from "./images/tweaking-robot.gif";

function App() {
  const [loader, setLoader] = useState(true);
  // const context= useContext(GlobalContext)
  const [characters, setCharacters] = useState([]);
  const [find, setFind] = useState("");
  // const {data}=context.data.data
  // console.log(data);

  // const characters=data.data&&data.data;
  // const characters=data.data;
  // console.log(data);
  // const {addToGallery}=context
  // const {searchGallery}=context

  // context.data.map(item=>console.log(item.name));
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/characters?q=${find}`);
      const fetchedData = await res.json();
      // console.log(fetchedData);
      // addToGallery(fetchedData)
      // setImages(data);

      setLoader(false);
      return fetchedData;
    };
    getData()
      .then((res) =>
        setCharacters(res)
      )
      .catch((err) => console.log(err));
  }, [find]);
  // console.log(characters);

  // console.log(characters);
  // console.log(characters.data?characters.map(item=>console.log(item)):"ekfmk");
  // const fetching = async () => {

  //   return fetchedData;
  // };

  const getSearch = (search) => {
    setFind(search);
    setLoader(true);

    console.log(search);
    //  searchGallery(search)

    //  const searched=search?
    //  console.log(context.data);
  };
  // 3d7202bd90msh6a47a9730d9098fp172f82jsn8b65e3de6bc6

  return (
    <div className="App">
      <Header getSearch={getSearch} />
      <Gallery characters={characters} loader={loader} robot={robot} />
    </div>
  );
}

export default App;

// https://restcountries.com/v3.1/all
// https://naruto-api.herokuapp.com/api/v1/characters


// const tags = "rice$beans$egg"

// console.log(tags.split('$'))