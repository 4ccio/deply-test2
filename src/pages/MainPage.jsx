import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to={"/deply-test2/testPage"}>
        Main Page Hello
      </Link>
    </div>
  );
}

export default MainPage;