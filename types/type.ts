import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";
import { BlockType } from "notion-block-renderer"

export type layoutChildren = {
    children: ReactNode; 
}

export type pageProps = {
    slug     : string;
    name     : string;
    author   : string;
    cover    : string;
    published: string;
    tags     : string[];
    content  : string;
}

export type CardProps = {
    page: pageType;
}

export type ArticleProps = {
    page   : pageType;
    blocks : BlockType[];
}

export type ArticleMetaProps = CardProps

export type params = ParsedUrlQuery & {
    slug: "string"
}


export type fileType = {
    file     ? : {url :string};
    external ? : {url :string};
}

export type annotationType = {
    bold          : boolean;
    italic        : boolean;
    strikethrough : boolean;
    underline     : boolean;
    code          : boolean;
    color         : string ;
}

export type richTextType = {
    plain_text  : string,
    href        : string | null ;
    annotations : annotationType;
}

export type propertyType = {
    Name      : { title: richTextType[] };
    author    : { rich_text: richTextType[] };
    slug      : { rich_text: richTextType[] };
    tags      : { multi_select: [{ name: string }] };
    isPublic  : { checkBox: boolean };
    published : { date: {start: string}};
}

export type pageType = {
    id         : string;
    cover      : fileType | null;
    properties : propertyType;
}

export type indexProps = {
    pages: pageType[];
}

// export type BlockType = {
//     type: string;
//     heading_1: { rich_text: richTextType[] };
//     heading_2: { rich_text: richTextType[] };
//     paragraph: { rich_text: richTextType[] };
// };

export type blockProps = { block : BlockType }