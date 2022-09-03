import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { ArticleMetaProps } from '../types/type'
import { getCover, getDate, getMultiSelect, getText } from '../utils/property'

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
    return (
        <>
            {/* page cover */}
            <Image
                className="w-full max-w-screen-lg rounded-lg aspect-video my-4 "
                src={getCover(page.cover)}
                alt=""
                objectFit="cover"
                width={740}
                height={420}
                quality={50}
            />
    
            {/* page name */}
            <h1 className="my-8">{getText(page.properties.Name.title)}</h1>
            <div className="bg-gray-100 mx-4 px-6 py-4 rounded text-sm text-gray-500">
                <div className="grid grid-cols-3 gap-4">
                {/* published */}
                <div className="col-span-1">公開日</div>
                <div className="col-span-2">{getDate(page.properties.published.date)}</div>
    
                {/* author */}
                <div className="col-span-1">投稿者</div>
                <div className="col-span-2">{getText(page.properties.author.rich_text)}</div>
    
                {/* tags */}
                <div className="col-span-1">{
                    <span >#tag</span>
                    }</div>
                <div className="col-span-2">
                    {/* change later */}
                    {getMultiSelect(page.properties.tags.multi_select).map((tag:string , index:number)=> (
                    <Link key={index} href={`/tags/${tag}`}>
                        <a className="text-gray-700 no-underline border-b border-solid border-gray-700 opacity-70 mr-3">
                            <span>{`#${tag}`}</span>
                        </a>
                    </Link>
                ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default ArticleMeta

// メタ情報は、他のデータの説明です。
// 付帯情報です。

// どんなに頑張っても主役にはなれません。
// 主役（主となるデータ）をサポートする脇役（付帯情報）です。

// ちなみに、わざわざ説明しておいてなんですが、私は「メタ情報」という用語を、あまり聞いたことがなかったりします。
// 別に調べたわけではありませんが「メタデータ」と表現する方が一般的だと思います。