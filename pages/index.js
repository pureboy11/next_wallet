import { useState, Suspense, useEffect } from "react";
import TitleManager from "../components/TitleManager";
import Animation from "../components/animation";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader"
import { HiOutlineX } from "react-icons/hi";


export default function Home() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [wallets, setWallets] = useState([]);
    const onChange = (e) => {
        setWalletAddress(e.target.value);
    };
    const onReset = (e) => {
        setWalletAddress("");
    };

    const walletType = [""]
    const [loading, setLoading] = useState(true);

    console.log(wallets);







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
                                <Suspense fallback={<MoonLoader color="#36d7b7" size={20} />}>
                                    <input
                                        onChange={onChange}
                                        id="walletInput"
                                        className="w-full bg-gray-100 dark:bg-gray-700 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        placeholder="Enter any Wallet Address."
                                    >
                                    </input>
                                </Suspense>
                            </div>
                            <div>
                            </div>

                            <button
                                className="btn-project rounded text-lg"
                                onClick={() => {
                                    setLoading(false);
                                    let copy = [...wallets];
                                    copy.unshift(
                                        walletAddress
                                    );
                                    setWallets(copy);

                                }}
                            >
                                Add
                                {
                                    loading === false ? <MoonLoader
                                        color="#f7eafe"
                                        size={20}
                                        className="ml-3"
                                    /> : null
                                }
                            </button>
                        </div>

                        {wallets.length >= 1 ?
                            wallets.map((a, i) => {
                                return (
                                    <div className="flex lg:flex-row md:flex-col mt-5"
                                        wallets={wallets[i]}
                                        i={i}
                                        key={i}
                                    >
                                        <div
                                            type="kaikas"
                                            className="bg-gray-100 inline-flex py-5 px-2 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                                        >

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-6 h-6"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">{walletType}</span>
                                                <span className="text-xs text-gray-600 mb-1">{wallets[i]}</span>
                                            </span>
                                        </div>
                                        <HiOutlineX
                                            className="wallet--x-icon text-black"
                                            onClick={() => {
                                                let copy = [...wallets];
                                                copy.splice(i, 1);
                                                setWallets(copy);
                                            }}
                                        />
                                    </div>
                                );
                            }) : null
                        }
                        {/* <p
                            onClick={() => {
                                setShow(!show);
                            }}
                            className="text-sm mt-2 text-gray-500 mb-8 w-full"
                        >
                            {" "}
                            Wallet List{" "}
                        </p> */}
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


