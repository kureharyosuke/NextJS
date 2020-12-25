import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/logo_transparent.png"
            alt="logo"
            style={{ display: "block", width: 150 }}
          />
        </div>
        <Header as="h1">BCROSSB</Header>
      </div>
      <Gnb />
    </div>
  );
}
