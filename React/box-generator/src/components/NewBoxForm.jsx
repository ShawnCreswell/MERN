import react, { useState } from 'react';


const MessageForm = (props) => {



    const [msg, setMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);

    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-header text-center">
                                <h1>Set Message</h1>
                            </div>
                            <div className="card-body d-flex justify-content-center align-itmes-center">
                                <textarea
                                    rows="4"
                                    cols="50"
                                    placeholder="Enter your message here"
                                    onChange={(e) => setMsg(e.target.value)}
                                    value={msg}
                                ></textarea>
                            </div>
                            <div className='d-flex justify-content-center align-itmes-center'>
                                <input className='btn btn-primary' type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
