import Link from "next/link";

const people = [
  { v: "car", name: "bruno" },
  { v: "bike", name: "John" },
  { v: "airplane", name: "Mick" },
];

//  * Data 오면 Link로
const product = [
  { productName: "RentCar", city: "Tokyo" },
  { productName: "Hotel", city: "Osaka" },
  { productName: "Shinkansen", city: "Nagoya" },
];

export default function Detail() {
  return (
    <div>
      {/* {people.map(e => ())} map 사용하여, */}
      <div>
        {people.map((e) => (
          <div>
            <Link as={`${e.v}/${e.name}`} href="/[vehicle]/[person]">
              {/* <a href="car/bruno"></a> */}
              {/* <Link as="car/bruno" href="/[vehicle]/person" ERR: person을 대괄호안하면 다이나믹라우팅 안된다.>  파일명하고 동일하게!*/}
              <a>
                Navigate to {e.v}'s {e.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <div>
        {product.map((e) => (
          <div>
            <Link as={`/${e.productName}/${e.city}`} href="/[tour]/[city]">
              <a>
                Navigate to {e.productName}'s {e.city}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
