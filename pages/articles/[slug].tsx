import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NotionBlocks from "notion-block-renderer";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";
import { ArticleProps, params } from "../../types/type";
import { fetchBlocksPageId, responsePage } from "../../utils/notion";
import { getText } from "../../utils/propaty";

export const getStaticPaths:GetStaticPaths = async () => {
    // responsePageに存在しうるpathの一覧を取得する
    const { results } = await responsePage({});
    const paths = results.map((page: any) => {
        return {
            params: {
                slug  : getText(page.properties.slug.rich_text),
            },
        };
    });
    return {
        paths: paths,
        fallback: "blocking",
    }
}

// 記事のページにリクエスト、アクセスする度にgetServerSideProps: GetServerSidePropsでレンダリングされ生成されている
export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as params ;

    // sampleCardsの配列からdataとゆう名前でひとつずつ取り出して、[slug](context)で渡ってきた値と一致するかをさ探してpageに格納
    // const page = sampleCards.find((data) => data.slug === slug);

    // notion.ts slugプロパティを指定してfilterをかけている、filterの複数引っかかる場合があるので、配列で帰ってくるので、この場合配列の順番を指定する
    const { results } = await responsePage({ slug: slug });
    const page = results[0];
    const pageId = page.id;
    // const { 帰ってきた値: 変数名 }として取り出すことができる
    const { results: blocks } = await fetchBlocksPageId(pageId);

    return {
        props: {
            page    : page ,
            blocks  : blocks,
        },
        revalidate: 10,
    };
};

const Article: NextPage<ArticleProps> = ({ page, blocks }) => {
    console.log(page);
    console.log(blocks);
    return (
        <Layout>
            <article className="w-[450px] md:w-full">
                {/* meta section */}
                <div className="my-12 text-center" >
                    <ArticleMeta page={page}/>
                </div>
        
                {/* article */}
                {/* <div className="my-12 mx-12">
                    {blocks.map((block, index) => (
                        <Block key={index} block={block}/>
                    ))}
                </div> */}
                <div className="my-12 mx-4">
                    <NotionBlocks blocks={blocks} isCodeHighlighter={true}/>
                </div>
            </article>
        </Layout>
    );
    };
    
export default Article;

// []で囲むことによって変数として取り出すことができる