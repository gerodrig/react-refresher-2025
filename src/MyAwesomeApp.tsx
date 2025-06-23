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
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}

export default MyAwesomeApp