import type { CSSProperties } from "react";

const firstName = "Benito";
const lastName = "Martinez";

const favoriteGames = ['Tetris', 'Squid Games', 'Super Smash bros'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
};

const MyAwesomeApp = () => {
    return (
      <div data-testid="div-app">
      <h1 data-testid="first-name-title"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p className="mi-favorite-class">{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Active' : 'Not active'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
    )
}

export default MyAwesomeApp