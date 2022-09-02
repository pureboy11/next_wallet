import TitleManager from "../components/TitleManager";
import { TOKEN, DATABSE_ID } from "../config";
import MintingList from "../components/MintingList";

export default function mint({ projects }) {

    // console.log(projects);

    return (
        <>
            <TitleManager pageTitle="mint" />
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 ">
                <h1 className="text-4xl font-bold sm:text-6xl mt-10">
                    Ongoing NFT Mints :
                    <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 lg:p-12 m-4 md:grid-cols-2 lg:grid-cols-3 ">
                    {projects.results.map((mintList) => (
                        <MintingList key={mintList.id} data={mintList} />
                    ))}
                </div>
            </div>
        </>
    );
}

// 빌드 타임에 호출
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN} `
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "date",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABSE_ID}/query`, options)

    const projects = await res.json()

    const projectresults = projects.results.map((mintList) => (
        mintList.properties.title.title[0].plain_text
    ))

    // console.log(`projectresults : ${projectresults}`);

    return {
        props: { projects }, // will be passed to the page component as props
    }
}

