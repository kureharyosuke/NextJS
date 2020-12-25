import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <img src="/images/" alt="logo" />
      <Header as="h1">LOGONAME</Header>
      <Gnb />
    </div>
  );
}
