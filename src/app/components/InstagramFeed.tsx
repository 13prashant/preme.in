import Link from "next/link";
import Image from "next/image";

interface InstagramPost {
  caption?: string;
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: Date;
}

const getInstagramPosts = async (): Promise<InstagramPost[]> => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink,thumbnail_url,timestamp&limit=10&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
  );

  const data = await res.json();

  return data.data;
};

export default async function InstagramFeed() {
  const instagramPosts = await getInstagramPosts();

  return (
    <section className="preme-container duration-300">
      <h2 className="mb-5 text-center text-2xl font-extralight">
        Poems penned by me
      </h2>

      <div className="grid place-items-center">
        <div className="max-w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 duration-300">
          {instagramPosts.map(
            ({ id, media_type, thumbnail_url, permalink, media_url }) => {
              if (media_type === "IMAGE" && media_url) {
                return (
                  <Link key={id} href={permalink} target="_blank">
                    <div className="relative group">
                      <div className="relative h-72 w-72 duration-300">
                        <Image
                          style={{ objectFit: "cover" }}
                          src={media_url}
                          fill
                          alt={media_url}
                        />
                      </div>
                      <div className="bg-black/30 absolute left-0 top-0 h-full w-full hidden group-hover:grid group-hover-text place-items-center text-white duration-300">
                        View on Instagram
                      </div>
                    </div>
                  </Link>
                );
              }
            }
          )}
        </div>
      </div>
    </section>
  );
}
