import { pageType, richTextType } from "../types/type"

export const getText = (richTextArray:richTextType[]) => {
    try {
        const textArray = richTextArray.map((richText) => richText.plain_text);
        
        // Join 関数は、配列を区切り文字で結合した文字列に変換します。
        // A B C の配列なら A,B,C のようにカンマ区切りで結合できます。
        // 配列をカンマ区切りなどの文字列に結合したいときに使用します。
        return textArray.join("");
    } catch (error) {
        console.log(error)
    }
    return "";
}

export const getCover = (cover: pageType["cover"]) => {
    // coverの中にcoverのどちらかが存在するならどちらかのurlを返す
    if( cover && cover.file )     return cover.file.url;
    if( cover && cover.external ) return cover.external.url;
    return "/noImage.png";
}

export const getDate = ( date: {start: string}) => {
    try {
        return date.start;
    } catch (error) {
        console.log(error)
    }
    return "-"
}

export const getMultiSelect = (multiSelect: [{name: string}]) => {
    try {
        return multiSelect.map((tag) => tag.name)
    } catch (error) {
        console.log(error)
    }
    return [];
}