import type { InferGetStaticPropsType } from 'next'
 
export default function Page({
  number,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>
    <h1>getStaticProps</h1>
    <h1>number: {number}</h1>
  </div>
}

export const getStaticProps = (async () => {
    const num = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain')
    const number = await num.json()
    return { props: { number } }
  })