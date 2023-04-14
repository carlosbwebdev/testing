import "@/styles/globals.css";
import CustomCursor from "@/components/UI/CustomCursor";
export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
