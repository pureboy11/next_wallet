import Image from "next/image";

export default function MintingList({ data }) {

    const projectTitle = data.properties.title.title[0].plain_text
    const startDate = data.properties.date.date.start
    const endDate = data.properties.date.date.end
    const desc = data.properties.Desc.rich_text[0].plain_text
    const priceType = data.properties.priceType.select.name
    const price = data.properties.Price.number
    const twitter = data.properties.twitter.rich_text[0].plain_text
    const url = data.properties.URL.url
    // const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.tag.multi_select
    const imgurl = data.properties.imgURL.url
    // const status = data.properties.Status.status.name

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgurl}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">🎉{projectTitle}</h1>
                <h3 className="my-5 text-lg bg-gray-200 px-5 py-3 dark:bg-gray-700 dark:text-gray-300">{desc}</h3>
                <ul className="mt-5">
                    <li className="mb-3"> EndDate : {endDate}</li>
                    <li className="mb-3"><h3> Minting Price : {price} {priceType}</h3></li>
                    <li className="mb-3"><h3> Twitter : {twitter}</h3></li>
                </ul>

                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md
                                        bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
                <a href={url}>바로가기</a>
            </div>


        </div>
    )
}