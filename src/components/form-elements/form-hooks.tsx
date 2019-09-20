import { useState, SyntheticEvent } from 'react';

interface IFormValues {
    [fieldName: string]: any
};

function useOnChangeFnHook(props:any) {
    const [value, setValue] = useState();

    const onChangeFn = function (evt:SyntheticEvent) {
        evt.stopPropagation();
        evt.preventDefault();
        
        const target = evt.target as HTMLTextAreaElement;
        let value:any = target.value;
        setValue(value);

        /**
         * Propagate to parent as key/value pair
         * We don't want to send as raw DOM value, as
         * there may have been some processing
         */
        const onChangeParentFn = useOnChangeParentFnHook(props);        
        if(onChangeParentFn) {
            onChangeParentFn(props.name, value);
        }    
    }

    return onChangeFn;
}

function useOnChangeParentFnHook(props:any) {
    let onChangeFn:any = null;

    if('eventHandlers' in props && 'onChange' in props.eventHandlers) {
        onChangeFn = props.eventHandlers.onChange;
    }

    return onChangeFn;
}

function useOnSubmitFnHook(props:any) {
    let onSubmitFn:any = null;

    if('eventHandlers' in props && 'onSubmit' in props.eventHandlers) {
        onSubmitFn = props.eventHandlers.onSubmit;
    }

    return onSubmitFn;
}

function useFormOnSubmitFnHook(props:any) {
    const [formValues, setFormValues] = useState<IFormValues | undefined>({});

    return () => {
        console.log("user-profile::onSubmitParentHandler");
        console.log(props);
        console.log(formValues);    
    }
}

export {useOnChangeParentFnHook, useOnChangeFnHook, useOnSubmitFnHook, useFormOnSubmitFnHook};