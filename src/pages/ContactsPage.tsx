import { Footer } from "../components/Footer/Footer"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Hedaer"
import { Layout } from "../components/PageLayout/Layout"
import { Photo } from "../components/Photo/Photo"

export const ContactsPage = () => {
    return (
        <Layout>
            <Header/>
            <Form/>
            <Footer/>
            <Photo/>
        </Layout>
    )
}