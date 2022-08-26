import { ParsedUrlQuery } from "querystring";
import { ReactNode } from "react";

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
    page: pageProps
}

export type ArticleProps = CardProps

export type ArticleMetaProps = CardProps

export type params = ParsedUrlQuery & {
    slug: "string"
}


export type fileType = {
    file     ? : {url :string},
    external ? : {url :string},
}

export type annotationType = {
    bold          : boolean,
    italic        : boolean,
    strikethrough : boolean,
    underline     : boolean,
    code          : boolean,
    color         : string ,
}

export type richTextType = {
    plain_text  : string,
    href        : string | null ,
    annotations : annotationType,
}

export type propertyType = {
    Name      : { title: richTextType[] },
    author    : { rich_text: richTextType[] },
    slug      : { rich_text: richTextType[] },
    tags      : { multi_select: [{ name: string }] },
    isPublic  : { checkBox: boolean },
    published : { date: {start: string}},
}

export type pageType = {
    id         : string,
    cover      : fileType,
    properties : propertyType,
}

export type indexProps = {
    pages: pageType[],
}