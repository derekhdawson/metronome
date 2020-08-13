import React from 'react';

type AppProps = { message: string }; /* could also use interface */
const App: React.FunctionComponent<AppProps> = ({ message }: AppProps) => <div>{message}</div>;
export default App;
