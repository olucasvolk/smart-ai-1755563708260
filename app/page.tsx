import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto my-10'>
        <h1 className='text-3xl font-bold mb-4'>Welcome to My Personal Blog</h1>
        <p className='text-lg'>Stay tuned for interesting posts!</p>
      </div>
    </Layout>
  );
}