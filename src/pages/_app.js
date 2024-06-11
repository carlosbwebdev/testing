import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import CustomCursor from "@/components/UI/CustomCursor";
export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
