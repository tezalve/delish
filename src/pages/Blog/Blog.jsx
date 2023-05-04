import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// react-to-pdf package is probably deprecated
// had to install using --force and also had 
// to declare module name in a typescript file
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='p-5'>
            <div ref={ref}>
                <h1>The differences between uncontrolled and controlled components?</h1>
                <p>
                    Controlled components in React are components whose state and behavior are controlled by the parent component. To change their state and behavior, these components rely on props sent down from the parent component. Uncontrolled components are those that manage their own state on their own.
                </p>
                <h1>How to validate React props using PropTypes?</h1>
                <p>
                    Props validation is a tool that will aid developers in avoiding future flaws and issues. It is an effective method for ensuring that components are used correctly. It improves the readability of the source code. Although it is not required to define components with propTypes, React components use special property PropTypes that help catch bugs by validating data types of values passed through props. However, using propTypes with the components can assist in avoiding unexpected bugs. App.propTypes is used in the react component to validate props. When some of the properties are supplied with an incorrect type, the JavaScript console displays warnings. We will set the App.defaultProps after defining the validation rules.

                </p>
                <h1>The difference between nodejs and express js?</h1>
                <p>
                    Express is a lightweight and adaptable Node.js online application framework that offers a comprehensive set of functionality for developing single, multi-page, and hybrid web apps. Node.js, on the other hand, is described as "a platform built on Chrome's JavaScript runtime for easily building fast, scalable network apps." Node.js has an event-driven, non-blocking I/O approach that is lightweight and efficient, making it ideal for data-intensive real-time applications running across dispersed devices.
                </p>
                <h1>What is a custom hook, and why will we create a custom hook?</h1>
                <p>
                    Custom React JS hooks are reusable functions that may be used by a React JS software developer to offer distinctive and unique functionality to React apps. Typically, if a feature is required, a third-party library can be installed to solve the problem. But what if there is no such library with usable hooks? Custom React JS hooks are used to overcome this issue. A custom hook is a JavaScript function with a name that begins with 'use' that may be used to call other hooks.
                </p>
            </div>
            <h3>Download Page Components</h3>
            {/* generating pdf from components */}
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FontAwesomeIcon icon={faDownload} />Generate Pdf</button>}
            </Pdf>
        </div>
    );
};

export default Blog;