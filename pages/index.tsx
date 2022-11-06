import type { NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "components/layouts/Navbar";
import Footer from "components/layouts/Footer";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/projects");
  }, [router]);
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
