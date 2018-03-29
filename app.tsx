import * as React from "react";
import * as ReactDOM from "react-dom";

import TestComponent from './src/testComponent';

ReactDOM.render(
    <div>
        <TestComponent name="John"  phoneNumber={3055054466} dateOfBirthday={new Date()} />
    
    </div>,
    document.getElementById("root")
);