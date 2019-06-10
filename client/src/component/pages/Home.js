import React from '../../../node_modules/react'
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm'

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
        <div>
            <Contacts />
        </div>
        </div>
    )
}

export default Home
