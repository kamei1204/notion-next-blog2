import Image from 'next/image'
import React, { FC } from 'react'
import { ArticleMetaProps } from '../types/type'

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
    return (
        <>
            {/* page cover */}
            <Image
                className="w-full max-w-screen-lg rounded-lg aspect-video my-4"
                src={page.cover}
                alt=""
                objectFit="cover"
                width={640}
                height={370}
                quality={50}
            />
    
            {/* page name */}
            <h1 className="my-8">{page.name}</h1>
            <div className="bg-gray-100 mx-4 px-6 py-4 rounded text-sm text-gray-500">
                <div className="grid grid-cols-3 gap-4">
                {/* published */}
                <div className="col-span-1">published</div>
                <div className="col-span-2">{page.published}</div>
    
                {/* author */}
                <div className="col-span-1">author</div>
                <div className="col-span-2">{page.author}</div>
    
                {/* tags */}
                <div className="col-span-1">{page.tags.map((tag:string , index:number)=> (
                    <span key={index}>{`#${tag}`}</span>
                ))}</div>
                <div className="col-span-2">
                    {/* change later */}
                    <span>#tag</span>
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