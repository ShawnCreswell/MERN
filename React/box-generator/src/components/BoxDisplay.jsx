import react, { useState } from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center">
                                <h1>Current Message</h1>
                            </div>
                            <div className="card-body d-flex justify-content-center align-itmes-center">
                                <pre>{props.message}</pre>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageDisplay;

