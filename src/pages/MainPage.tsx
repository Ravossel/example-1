import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Hedaer";
import { Layout } from "../components/PageLayout/Layout";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Photo } from "../components/Photo/Photo";

export const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Paragraph/>
      <Footer/>
      <Photo/>
    </Layout>
  );
};
