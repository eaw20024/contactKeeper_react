import React, { useReducer } from '../../../node_modules/react';
import uuid from '../../../node_modules/uuid';
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
                type:'professional'
            },
            {
                id:3,
                name:'Vancine Washington',
                email:'vancine@gmail.com',
                phone:'333-333-3333',
                type:'personal'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);


    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact})
    };
    // DeleteContact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    };
    // Set Current Contact
    // Clear Current Contact
    // Update Contact
    // Filter Contact
    // Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact,
            deleteContact
        }}
        >
            
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;

