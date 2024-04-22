export function DropDownMenu(props) {
  return (
    <div className="drop-menu">
      <button
        className="drop-menu-elem"
        onClick={() => props.setMainComponent(0)}
      >
        Trivia Game
      </button>
      <button
        className="drop-menu-elem"
        onClick={() => props.setMainComponent(1)}
      >
        Meme Generator
      </button>
      <button
        className="drop-menu-elem"
        onClick={() => props.setMainComponent(2)}
      >
        Thing 3
      </button>
      <button
        className="drop-menu-elem"
        onClick={() => props.setMainComponent(3)}
      >
        Thing 4
      </button>
    </div>
  )
}
