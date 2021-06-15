import { useRouter } from "next/router";

export default function Person() {
  const { query } = useRouter();
  console.log(query);
  return <div>{JSON.stringify(query)}</div>;
}
