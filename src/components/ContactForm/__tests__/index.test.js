import React from 'react';
import ContactForm from '../index';
import {shallow, mount} from 'enzyme';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

describe('Contact Form Component ', () => {
    let store = createStore(combineReducers({ form: formReducer }))
    const props = {
            handleSubmit: jest.fn()
            //asyncValidate: jest.fn()
        }
    
    var subject = mount(
        <Provider store={store}>
            <ContactForm {...props}/>
        </Provider>
    )

    describe('On submit form', () => {
        const form = subject.find('form')
        const firstName = form.find('.firstName')
        const lastName = subject.find('.lastName')
        const email = subject.find('.email')
        
        it("Check the default values of redux form ", () => {
        expect(firstName.props().value).toBe('Please Enter First Name')
            expect(lastName.props().value).toBe('Please Enter Last Name')
            expect(email.props().value).toBe('soni@gmail.com')
        })

        it("should check all props of Firstname Field attribute of Redux form", () => {
            var firstNameProps = firstName.props();

            // console.log(firstNameProps)
            expect(firstNameProps.name).toBe('firstName')
            expect(firstNameProps.type).toBe('text')
            expect(firstNameProps.value).toBe('Please Enter First Name') // initial value is 'Please Enter first name'
        })

        it("Enter first name then submit Form should calls handleSubmit", () => {
            firstName.simulate('change', { target: { value: 'Sonika' } })
            expect(firstName.props().value).toBe('Sonika')  
            form.simulate('submit')
            expect(props.handleSubmit.mock.calls.length).toBe(1);
        })

        

        // it("Async Call ", () => {
        //     firstName.simulate('change', { target: { value: 'john' } })
        //     expect(props.asyncValidate.mock.calls.length).toBe(1)
        // })

    });
});