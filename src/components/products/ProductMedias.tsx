/* eslint-disable @next/next/no-img-element */
"use client";
import { Media } from "@/types/Media";
import { HTMLAttributes } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

type ProductMediasProps = HTMLAttributes<HTMLDivElement> & {
  medias: Media[];
};

export default function ProductMedias({ medias, ...rest }: ProductMediasProps) {
  const mainMedias = medias.slice(0, 2);

  const otherMedias = medias.slice(2);

  return (
    <div {...rest}>
      <PhotoProvider>
        <section className="flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {mainMedias?.map((media) => (
              <PhotoView key={media.id} src={media.url}>
                <img
                  className="aspect-square object-cover w-full"
                  src={media.url}
                  alt={media.url}
                />
              </PhotoView>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherMedias?.map((media) => (
              <PhotoView key={media.id} src={media.url}>
                <img
                  className="aspect-square object-cover w-full"
                  src={media.url}
                  alt={media.url}
                />
              </PhotoView>
            ))}
          </div>
        </section>
      </PhotoProvider>
    </div>
  );
}
