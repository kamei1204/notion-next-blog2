import type { GetStaticProps, NextPage } from 'next'
import Card from '../components/Cards'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { indexProps } from '../types/type'
import { responsePage } from '../utils/notion'
import { sampleCards } from '../utils/sample'

// SSG = ビルドの段階でHTMLが生成される状態になっている = 事前生成 = ビルドが何度も行なわれるのがデメリット　= ビルドを行うと他のページも全てビルドし直すため処理が大変
export const getStaticProps:GetStaticProps = async () => {
  const { results } = await responsePage(); 
  return {
    props: {
      pages: results ? results : [],
    },
    // ISR = SSGとSSRの中間のようなもの = ちょこちょこ更新するような場面において有効　= なぜなら秒数を指定した後、新しいHTMLを生成してくれて、次以降のリクエストに関してはそれを見せてくれる
    revalidate: 10,
  };
};

const Home: NextPage<indexProps> = ({ pages }) => {
  console.log(pages);
  return (
    <Layout>
      <Section />
      <div className="pt-12">
        {/* <h1 className="text-5xl mb-8">{siteConfig.title}</h1> */}
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {/* Card */}
          {sampleCards.map((page,index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
