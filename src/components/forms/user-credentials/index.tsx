import React, {useState, SyntheticEvent} from 'react';
import {PasswordField, SubmitButton} from '../../form-elements';
import { any } from 'prop-types';

interface IFormValues {
    [fieldName: string]: any
};

const form = function (props:any) {
    const [formValues, setFormValues] = useState<IFormValues | undefined>({});

    const onChangeParentHandler = function (fieldName:string, value:any) {
        formValues[fieldName] = value;
        setFormValues(formValues);

        console.log(formValues);
    };

    const onSubmitParentHandler = () => {
        console.log(formValues);
    }

    return <div>
        <PasswordField label='Password' name='password' placeholderText='Enter Password...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <PasswordField label='Confirm Password' name='confirm_password' placeholderText='Confirm Password...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <SubmitButton eventHandlers={{ 'onSubmit': onSubmitParentHandler }} />
    </div>

}

export default form;