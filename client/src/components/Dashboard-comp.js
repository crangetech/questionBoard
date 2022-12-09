import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utils/mutations';


function DashboardComp() {
    const [formState, setFormState] = useState({ question: '' });
    const [addQuestion] = useMutation(ADD_QUESTION);
    // const endpoint =
    //     process.env.REACT_APP_API_ENDPOINT || 'https://localhost:3001'
    // update state based on form input changes

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addQuestion({
                variables: { ...formState }
            });

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main>
<<<<<<< HEAD
    <div>
        <div className>
            <h2 className>
                Welcome to your Question Dashboard!
            </h2>
            <p className>
                Have a question? Ask the community.
            </p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">What is your Question?</label>
                <input id="question" name="question" value={formState.question} onChange={handleChange} type="question" /><br />
                <button type="submit">Post Question</button><br /><br />
            </form>
        </div>
        <div className>
            <h3 className>
                Previously asked questions:
            </h3>
            {/* Table of previous questions can go here */}
        </div>
    </div>
=======
        <div className="containers w3-display-left">
            <div className="row">
                <div className="col-md-12">
                <h2 >
                    Welcome to your Question Dashboard!
                </h2>
                <p className="">
                    Have a question? Ask the community.
                </p>
                <form id>
                    <label htmlFor="title">What is your Question?</label>
                    <input type="text" name id className /><br />
                    <button>Post Question</button><br /><br />
                </form>
                
                    <div className>
                <h3 className>
                    Previously asked questions:
                </h3>
                {/* Table of previous questions can go here */}
                    </div>
                </div>
            </div>
        </div>
>>>>>>> b7d4806c5cf0fe666563e870c468cfcff61bc567
        </main >


    )
}
export default DashboardComp
