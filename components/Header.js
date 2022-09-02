import Link from "next/link";
import Darkmode from "./darkmode";

export default function Header() {

    return (

        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="text-xl font-bold sm:text-3xl">
                            <h1>Wallet Viewer</h1>
                            {/* <img src="/wViewer.png" /> */}
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/mynft">
                            <a className="mr-5 hover:text-gray-900">MY NFT</a>
                        </Link>
                        <Link href="/mint">
                            <a className="mr-5 hover:text-gray-900">MINT</a>
                        </Link>

                        {/* <a href="https://discord.gg/ctxA88yw" className="mr-5 hover:text-gray-900">Contact Us</a> */}
                    </nav>
                    <Darkmode />
                </div>
            </header>

            <style jsx>{`
            `}</style>
        </>
    );
}