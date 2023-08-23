import React from "react";

const Card = () => {


    return (
        <>
        <div className="container">
            <div className="row col-5 offset-4 mt-3">
                <h3 className="">LEAD FORM</h3>
                <form name="leadform" id="leadForm">
                <div className="mb-3">
                        <label for="leadName" className="form-label" >Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="leadName"/>
                    </div>
                    <div className="mb-3">
                        <label for="leadEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="leadEmail"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="leadContact" className="form-label">Contact</label>
                        <input type="tel" className="form-control" name="leadContact"  />
                    </div>
                    <div className="mb-3">
                        <label for="leadBirthday" className="form-label">Birthday</label>
                        <input type="date" className="form-control" name="leadBirthday"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">By submitting you agree to share your contact details with Aditya Birla Sun Life Mutual Fund (ABSLMF). ABSLMF can contact you about the above request. ABSLMF agrees to use your information in accordance with our privacy policy.</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        </>


    )
}

export default Card;