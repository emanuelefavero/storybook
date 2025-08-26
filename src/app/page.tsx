import Progress from '@/components/Progress'

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <div className='p-4'>
        <Progress value={50} duration={1000} />
      </div>
    </>
  )
}
