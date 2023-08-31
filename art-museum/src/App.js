import harvardArt from "./Data/harvardArt";
import GalleryNavigation from "./Components/GalleryNavigation";


function App() {
  const galleries = harvardArt.records
  return (
        <GalleryNavigation galleries = {galleries}/>
  );
}

export default App;
