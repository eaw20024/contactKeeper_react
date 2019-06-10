import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../Types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name:'Eric Washington',
                email:'eric@gmail.com',
                phone:'111-111-1111',
                type:'personal'
            },
            {
                id:2,
                name:'Eboni Washington',
                email:'eboni@gmail.com',
                phone:'222-222-2222',
                type:'personal'
            },
            {
                id:3,
                name:'Vancine Washington',
                email:'vancine@gmail.com',
                phone:'333-333-3333',
                type:'personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);


    // Add Contact
    // DeleteContact
    // Set Current Contact
    // Clear Current Contact
    // Update Contact
    // Filter Contact
    // Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
        >
            
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;

