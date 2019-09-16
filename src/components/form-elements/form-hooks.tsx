import { useState, SyntheticEvent } from "react";

function useOnChangeFnHook(props:any) {
    const [value, setValue] = useState();

    const onChangeParentFn = useOnChangeParentFnHook(props);

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
    
    const [onChange, setOnChange] = useState(() => onChangeFn);

    return onChange;
}

function submitForm(props:any) {
    
}

export {useOnChangeParentFnHook, useOnChangeFnHook};