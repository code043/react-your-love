import { Button } from "./components/button/Button";
import { Image } from "./components/image/Image";
import { List } from "./components/list/List";
import { Title } from "./components/title/Title";
import "./global.css";

function App() {
  return (
    <div className="container">
      <main className="hero">
        <div className="hero-content">
          <Title styleHeading="title">
            Design <Image styleImage="" path="./image/circle.png" alt="logo" />
            <span className="break-line"></span>what you love
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit
            vulputate.consectetur adipiscing elit.
          </p>
          <Button styleBtn="btn">Get Started</Button>
        </div>
        <div className="hero-image">
          <Image styleImage="image" path="./image/bixin.png" alt="" />
        </div>
      </main>
      <div className="list">
        <List styleList="list-content" />
      </div>
    </div>
  );
}

export default App;
