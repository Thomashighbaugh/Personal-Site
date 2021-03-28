import Link from "@/components/Link/index";
import { PageSeo } from "../components/SEO/index";
import Image from "next/image";
import siteMetadata from "../data/siteMetadata";

export default function Home() {
  return (
    <div>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <img
        className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl"
        src="/static/images/twitter-card.png"
        alt="twitter card & banner"
      />
    </div>
  );
}
