import { GetServerSideProps, NextPage } from "next";
import React, { FC } from "react";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";
import { ArticleProps, pageProps, params } from "../../types/type";
import { sampleCards } from "../../utils/sample";

// 記事のページにリクエスト、アクセスする度にgetServerSideProps: GetServerSidePropsでレンダリングされ生成されている
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params as params ;

    // sampleCardsの配列からdataとゆう名前でひとつずつ取り出して、[slug](context)で渡ってきた値と一致するかをさ探してpageに格納
    const page = sampleCards.find((data) => data.slug === slug);

    return {
        props: {
            page: page ,
        },
    };
};

const Article: NextPage<ArticleProps> = ({ page }) => {
    return (
        <Layout>
        <article className="w-full">
            {/* meta section */}
            <div className="my-12">
                <ArticleMeta page={page}/>
            </div>
    
            {/* article */}
            <div className="my-12">article { page.content }</div>
        </article>
        </Layout>
    );
    };
    
export default Article;

// []で囲むことによって変数として取り出すことができる