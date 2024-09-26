import { Button } from "./components/button/Button";
import { Image } from "./components/image/Image";
import { Title } from "./components/title/Title";
import "./global.css";

function App() {
  return (
    <div>
      <main>
        <div>
          <Title />
          <p>Paragrafo</p>
          <Button />
        </div>
        <div>
          <Image />
        </div>
      </main>
    </div>
  );
}

export default App;
