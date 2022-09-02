import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY as string});

const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const responsePage = async ({ slug, tag } : {slug?: string, tag?: string}) => {

    const and:any = [
        {
            // 条件としてはチェックが入っているかの確認
            property: "isPublic",
            checkbox: {
                equals: true,
            },
        },
        {
            // slugの値が入っているかの確認
            property: "slug",
            rich_text: {
                is_not_empty: true,
            },
        },
        
    ];

    // 渡ってきた値(slug)がproperty: "slug"とequals(=)ならand.pushで配列に追加する
    if( slug ) {
        and.push(
            {
                property: "slug",
                rich_text: {
                equals: slug,
                },
            },
        );
    };
    if( tag ) {
        and.push(
            {
                property: "tags",
                multi_select: {
                    contains: tag
                },
            },
        );
    };

    return await notion.databases.query({
        database_id: DATABASE_ID,
        // filterでどんな状況にするかや等しいかを設定できる
        filter: {
            // filterを複数の場合の、またわは　or 　　全部の条件が一致していて,trueなら andを使っていく
            // andの場合は[]の中に{条件}を書く
            and: and,
        },

        
        // ソート◆データをABC順、五十音順、数値の昇順・降順に並べ替えること
        sorts: [
            {
                property: "published",
                // この場合は公開日を降順に表示する
                direction: "descending",
            }
        ]
    })
};

export const fetchBlocksPageId = async ( pageId:string ) => {
    return await notion.blocks.children.list({ block_id: pageId });
}