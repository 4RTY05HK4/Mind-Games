import { useEffect, useState } from "react"

export function Welcome() {

  const [joke, setJoke] = useState("")

  useEffect(() => {
    async function getJoke(){
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
      const data = await res.json()
      setJoke(`Did you know that ${data.text[0].toLowerCase()}${data.text.slice(1,data.text.length-1)}?`)
    }
    getJoke()
  }, [])

  
  return (
    <div>
      <h1 className="welcome">Welcome! Pick your poison!</h1>
      <h2 className="daily-fact">{joke}</h2>
    </div>
  )
}
