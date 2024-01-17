import RootLayout from '../app/layout';


function MyApp({ Component, pageProps }) {
  return (
    <RootLayout metadata={Component.metadata || { title: 'Unknown Title', description: 'Unknown Description' }}>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;