import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {

  const entryData = data.map((entry)=> {
    return (
      <Entry 
        img={entry.img}
        title={entry.title}
        country={entry.country}
        gLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryData}
      </main>
    </>
  )
}
