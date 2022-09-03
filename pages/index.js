import { useState } from "react";
import TitleManager from "../components/TitleManager";
import Animation from "../components/animation";
import Link from "next/link";
import WalletConnet from "../components/WalletConnect";
import walletInfo from "../components/walletInfo";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [walletAddress, setWalletAddress] = useState("");
  const onChange = (e) => {
    setWalletAddress(e.target.value);
  };
  const onReset = () => {
    setAddress("");
  };
  const [wallets] = useState(walletInfo);

  return (
    <>
      <TitleManager pageTitle="home" />
      <section className="flex min-h-screen flex-col items-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl mb-4 font-xl font-bold text-gray-900">
              How much NFT assets do you have?
            </h1>
            <p className="mb-8 leading-relaxed font-semibold">
              Check it right now by simply entering wallet address.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  onChange={onChange}
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 dark:bg-gray-700 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter any Wallet Address."
                />
              </div>
              <button
                className="btn-project rounded text-lg"
                onClick={() => {
                  setShow(true);
                  <WalletConnet />;
                }}
              >
                {" "}
                Add
              </button>
            </div>

            {/* {show === true
              ? wallets.map((a, i) => {
                  return (
                    <WalletConnet
                      wallets={wallets[i]}
                      i={i}
                      key={wallets}
                    ></WalletConnet>
                  );
                })
              : null} */}
            <p
              onClick={() => {
                setShow(!show);
              }}
              className="text-sm mt-2 text-gray-500 mb-8 w-full"
            >
              {" "}
              Wallet List{" "}
            </p>
            <Link href="mynft">
              <a className="bg-gradient-to-r from-indigo-600 to-pink-500 inline-flex text-white dark:text-white  border-0 py-2 px-6 focus:outline-none rounded text-lg mt-10">
                Check Now
              </a>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </section>

      <style jsx>{``}</style>
    </>
  );
}
