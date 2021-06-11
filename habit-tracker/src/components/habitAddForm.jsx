import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name=inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add_form" onSubmit={onSubmit}>
            <input 
                ref={inputRef} 
                type="text" 
                className="add_input" 
                placeholder="Habit"
            />
            <button className="add_button">Add</button>
        </form>
      );
});


export default HabitAddForm;