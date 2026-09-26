import Link from "next/link";

export type NothingHereProps = {
  prop: string
}

const NothingHere = () => {
  
  return (
    <div className="container mx-auto flex border border-gray-700 bg-[#191a25] rounded-3xl h-70 items-center justify-center my-8">
    <div className=" m-8 grid">
      <h1 className="mx-auto text-3xl m-2 font-bold">NOTHING HERE YET</h1>
      <p className="text-gray-400 m-2">Browse the library and add a lift to get today moving.</p>
      <Link href={'/Workouts'} className="mx-auto"><button className="btn rounded-2xl bg-[#C2F800] w-40 mx-auto my-3 font-bold">Go to workers</button></Link>
    </div>
    </div>
  )
}

export default NothingHere;