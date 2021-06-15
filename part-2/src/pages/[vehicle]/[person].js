import { useRouter } from "next/router";

export default function Person({}) {
  const router = useRouter();
  return <pre>{ownersList[0].details}</pre>;
}

List.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const response = await fetch(
    "http://localhost:4001/vehicles?ownerName=" +
      query.person +
      "&vehicle=" +
      query.vehicle
  );
  const ownersList = await response.json();
  return { ownersList: ownersList };
};

// Person.getStaticProps = async () => {
//   const response = await fetch("http://localhost:4001/vehicles");
//   const ownersList = await response.json();
//   return { ownersList: ownersList };
// };
