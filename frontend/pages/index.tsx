import Link from "next/link";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className={"title"}>
        <p>Welcome</p>
      </div>
      <div className={"bodyText"}>
        <article>
          Hello, my name is Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Neque, quaerat dignissimos praesentium distinctio consectetur
          eos vitae enim sit officia maiores saepe! Quisquam aliquam, veniam
          nemo deserunt repellendus debitis quas! Incidunt. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quos, quisquam? Omnis aliquid
          rerum voluptatibus est corporis dolores sapiente ullam! Recusandae
          numquam quos alias eius excepturi aliquid quibusdam officiis fuga
          maiores?
        </article>
      </div>
      <Link href="/shop" passHref>
        <a className={"shopbtn"}>Check out the shop</a>
      </Link>
    </div>
  );
};
export default Home;
