import React, { useState, useEffect } from "react"
export const Meme = () => {
  const [allMeme, setAllMeme] = useState([])

  const apiUrl = "https://api.imgflip.com/get_memes"

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setAllMeme(data.data.memes)
      const meme = data.data.memes[~~(Math.random() * data.data.memes.length)]
      setMeme({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: meme.url,
        imageAlt: meme.name,
      })
    }
    fetchMemes()
  }, [])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    imageAlt: "",
  })

  const randMemeGen = () => {
    const randMeme = allMeme[~~(Math.random() * allMeme.length)]
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randMeme.url,
      imageAlt: randMeme.name,
    }))
  }

  const addCaptions = (event) => {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main className="main-meme">
      <div className="form">
        <div className="form-labeled-input">
          <label htmlFor="top-text">Top text</label>
          <input
            id="top-text"
            className="form-input"
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={addCaptions}
          />
        </div>
        <div className="form-labeled-input">
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            id="bottom-text"
            className="form-input"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={addCaptions}
          />
        </div>
        <button onClick={randMemeGen} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt={meme.imageAlt}
          className="meme-image"
        />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
