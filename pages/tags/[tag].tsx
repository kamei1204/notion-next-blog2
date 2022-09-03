import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Card from '../../components/Cards'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { tagProps } from '../../types/type'
import { responsePage } from '../../utils/notion'
import { params } from '../../types/type'
import { getMultiSelect } from '../../utils/property'


export const getStaticPaths:GetStaticPaths = async () => {
    // responsePageに存在しうるpathの一覧を取得する
    const { results }: {results: Record<string, any>[]} = await responsePage({});

    // Setインスタンスで重複を避けてくれる
    const pathSet: Set<string> = new Set()
    for ( const page of results) {
        for ( const tag of getMultiSelect(page.properties.tags.multi_select)) {
            // tagの重複を防ぐ
            pathSet.add(tag)
        }
    }

    // pathの集合をArray.fromで配列に変換して,mapで回している
    const paths = Array.from(pathSet).map((tag) => {
        return {
            params: {
                tag: tag,
            }
        }
    })
    return {
        paths: paths,
        fallback: "blocking",
    }
}

// SSG = ビルドの段階でHTMLが生成される状態になっている = 事前生成 = ビルドが何度も行なわれるのがデメリット= ビルドを行うと他のページも全てビルドし直すため処理が大変
export const getStaticProps:GetStaticProps = async (context) => {
    const { tag } = context.params as params ;
    const { results } = await responsePage({ tag }); 
    return {
        props: {
        pages: results ? results : [], 
        tag  : tag,
        },
        revalidate: 5,
    };
};

const tag: NextPage<tagProps> = ({ pages, tag }) => {
    console.log(pages);
    return (
        <Layout>
        <Section />
        <div className="pt-12">
            <h1 className="text-5xl mb-8">{`#${tag}`}</h1>
            <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {pages.map((page,index) => (
                <Card key={index} page={page} />
            ))}
            </div>
        </div>
        </Layout>
    )
}

export default tag



