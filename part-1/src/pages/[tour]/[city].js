import { useRouter } from "next/router";

export default function City() {
  const router = useRouter();
  console.log(router.query);

  return (
    <h1>
      {router.query.tour} is {router.query.city}
    </h1>
  );
}
