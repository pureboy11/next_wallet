import TitleManager from "../components/TitleManager";
import { useState } from "react";
import nftdata from "../components/Data/nftdata";
import NumberFormat from "react-number-format";
import NftList from "../components/nftList";
import Link from "next/link";

export default function Mynft() {
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Newest NFT", value: "1" },
    { name: "Highest Price", value: "2" },
    { name: "Increase in Value", value: "3" },
  ];

  let [nfts, moreNfts] = useState(nftdata);
  var nftTotal = nfts.reduce(function (prev, cur) {
    return prev + cur.price;
  }, 0);

  return (
    <>
      <TitleManager pageTitle="mynft" />

      <div className="bg-indigo-600">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2"></span>
              <p className="ml-3 truncate font-medium text-white">
                <NumberFormat
                  value={123414}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <NumberFormat
                    value={nftTotal}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />{" "}
                </h2>
                <p className="leading-relaxed"> 12.48 ETH</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <NumberFormat
                    value={123414}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />{" "}
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center min-h-screen px-5 mb-10">
        <div className="bg-gray-200 dark:bg-gray-600">
          <h1 className="text-xl font-bold sm:text-2xl text-center">
            NFT list
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:p-12 m-4 md:grid-cols-2 lg:grid-cols-3 ">
          {nfts.map((nftList) => (
            <Link href={`/mynft/${nftList.id}`} key={nftList.id}>
              <a>
                <NftList nfts={nftList} />
              </a>
            </Link>
          ))}
        </div>
      </div>



      {/* <button
          onClick={() => {
            axios
              .get("http://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                let copy = [...nfts, ...result.data];
                moreNfts(copy);
              })
              .catch(() => {
                console.log("실패함 ㅅㄱ");
              });
          }}
        >
          더보기
        </button> */}

      <style jsx>{`
        background-color: ;
      `}</style>
    </>
  );
}
