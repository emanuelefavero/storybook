import Progress from '@/components/Progress'

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <div className='p-4'>
        <Progress value={100} duration={3000} />
      </div>
    </>
  )
}
