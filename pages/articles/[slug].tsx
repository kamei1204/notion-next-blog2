import React from "react";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";

const Article = () => {
    return (
        <Layout>
        <article className="w-full">
            {/* meta section */}
            <div className="my-12">
                <ArticleMeta />
            </div>
    
            {/* article */}
            <div className="my-12">article</div>
        </article>
        </Layout>
    );
    };
    
export default Article;

// []で囲むことによって変数として取り出すことができる