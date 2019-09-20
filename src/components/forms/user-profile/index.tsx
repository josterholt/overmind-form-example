import React, {useState, SyntheticEvent} from 'react';
import {TextField, NumberField, SubmitButton} from '../../form-elements';
import {useFormOnSubmitFnHook} from '../../form-elements/form-hooks';
import { any } from 'prop-types';

interface IFormValues {
    [fieldName: string]: any
};

const form = function (props:any) {
    const [formValues, setFormValues] = useState<IFormValues | undefined>({});
    const onFormSubmitFn = useFormOnSubmitFnHook(props);

    const onChangeParentHandler = function (fieldName:string, value:any) {
        formValues[fieldName] = value;
        setFormValues(formValues);

        console.log("user-profile::onChangeParentHandler");
        console.log(formValues);
    };

    return <div>
        <TextField label='First Name' name='first_name' placeholderText='Enter First Name...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <TextField label='Last Name' name='last_name' placeholderText='Enter Last Name...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <TextField label='Phone' name='phone' placeholderText='Enter Phone Number...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <NumberField label='Number' name='number' placeholderText='Enter Number...' eventHandlers={{'onChange': onChangeParentHandler }} />
        <SubmitButton eventHandlers={{ 'onSubmit': onFormSubmitFn }} />
    </div>

}

export default form;