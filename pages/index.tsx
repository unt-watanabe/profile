import type { NextPage, GetStaticProps } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { css } from '@emotion/react';
import { createClient } from 'contentful';
import { Data, Items } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY as string,
  });
  const data = await client.getEntries();

  return {
    props: data,
  };
};

const Home: NextPage<Data> = (props) => {
  let items = props.items;
  if (items) {
    items = items.sort((a: Items, b: Items) => {
      return a.fields.snsOrder - b.fields.snsOrder;
    });
  }

  return (
    <div css={wrapper} className='mx-auto grid min-h-[100vh] max-w-[900px] p-[30px]'>
      <Header />
      <main className='mt-[40px]'>
        {
          <ul className='flex flex-wrap gap-[40px]'>
            {items ? (
              items.map((x: any) => (
                <li key={x.fields.snsOrder} className='w-[110px]'>
                  <a href={x.fields.snsLink} target='_blank' rel='noopener noreferrer'>
                    <img src={x.fields.snsIcon.fields.file.url} alt={x.fields.snsName} />
                  </a>
                </li>
              ))
            ) : (
              <p>データの取得に失敗しました。</p>
            )}
          </ul>
        }
      </main>
      <Footer />
    </div>
  );
};

export default Home;

const wrapper = css`
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'main main'
    'footer footer';

  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
`;
