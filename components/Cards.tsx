import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CardProps } from "../types/type";
import { getCover, getDate, getMultiSelect, getText } from "../utils/property";

const Card: FC<CardProps> = ({ page }) => {
    return (
        <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
        <a className="flex justify-center ">
            <div className="max-w-md rounded overflow-hidden shadow-lg w-full mb-6 mt-7 md:my-0 content-between grid">
            {/* image */}
                <div className="flex justify-center">
                    {" "}
                    {/* Next.jsのImageは特殊な設定が必要になる ドメインの追加が必要*/}
                    <Image
                    className="w-full static h-auto"
                    src={getCover(page.cover)}
                    alt=""
                    objectFit="cover"
                    width={400}
                    height={225}
                    quality={30}
                    />
                </div>
        
                {/* title & date*/}
                <div className="px-6 pt-4 ">
                    <h2 className="text-base font-medium mb-3 ">{getText(page.properties.Name.title)}</h2>
                    <p className="text-gray-700 text-xs">{getDate(page.properties.published.date)}</p>
                </div>
        
                {/* tag */}
                <div className="px-6 py-4 ">
                    {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
                    <span
                        key={index}
                        className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
                    >
                        {`#${tag}`}
                    </span>
                    ))}
                </div>
            </div>
        </a>
        </Link>
    );
    };
    
export default Card;




