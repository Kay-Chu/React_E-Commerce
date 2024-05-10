import { useState } from "react";
import { Navbar, Footer } from "../components";

const UserInfo = () => {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        address: '1234 Elm Street',
        city: 'Metropolis',
        postalCode: '12345',
        country: 'Neverland',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the submission, e.g., sending data to a backend server
        console.log('Submitting form data:', formData);
        alert('Information saved!');
    };

    return (
        <>
<Navbar />
        <div className="container my-3 mt-2 mb-3 p-5 py-3 bg-light ">
        <h1 className="text-center">My Shipping Address</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
        <form onSubmit={handleSubmit} className="form my-3">
        {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="input-group mb-3">
                        <input
                            type="text"
                            name={key}
                            className="form-control"
                            value={value}
                            onChange={handleChange}
                            aria-label={key}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fas fa-pen"></i>
                            </span>
                        </div>
                    </div>
                ))}
            <button className="customized_button w-100 mt-2" type="submit">Save Information</button>
        </form>
        </div>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default UserInfo;
