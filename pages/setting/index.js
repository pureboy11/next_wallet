import TitleManager from "../../components/TitleManager";
import Link from "next/link";


export default function setting() {
    return (
        <>
            <TitleManager pageTitle="setting" />
            <div>setting index</div>
            <Link href="/setting/wallet">
                <a className=" btn-project rounded text-lg">wallet</a>
            </Link>

        </>
    );
}
