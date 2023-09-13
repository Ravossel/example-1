import { About } from "../components/About/About"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Hedaer"
import { Layout } from "../components/PageLayout/Layout"
import { Photo } from "../components/Photo/Photo"

export const AboutPage = () => {
    const id = '/about'
    return (
        <Layout>
            <Header/>
            <About/>
            <Footer/>
            <Photo/>
        </Layout>
    )
}