import Image from "next/image";

export default function NftList(props) {
  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src="https://global-uploads.webflow.com/6241bcd9e666c1514401461d/62f9db3f69817b51a7662736_7.gif"
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{props.nfts.title}</h1>
        <h3 className="my-5 text-lg bg-gray-200 px-5 py-3 dark:bg-gray-700 dark:text-gray-300">
          {props.nfts.content}
        </h3>
        <ul className="mt-5">
          <li className="mb-3"> Floor price : 0.194 ETH</li>
          <li className="mb-3">
            <h3>Last sale price : {props.nfts.price}</h3>
          </li>
          <li className="mb-3">
            <h3> 135% increase from last week </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
