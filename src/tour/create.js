import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function CreateTour() {
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: ""
    })
    const navigate = useNavigate();
   function create (e){
    axios.post('http://localhost:3000/tuors',e).then(c=>{
        alert(" success")
        navigate("/")
    })
   }
return(
    <>
        <h2>Create</h2>
        <div>
            <Formik initialValues={tour}
                    onSubmit={(e)=>create(e)}>
                <Form>
                    <label htmlFor={'title'}>Title</label>
                    <Field name={'title'} id={'title'}/>
                    <label htmlFor={'price'}>Price</label>
                    <Field name={'price'} id={'price'}/>
                    <label htmlFor={'description'}>Description</label>
                    <Field name={'description'} id={'description'}/>
                    <button type={'submit'}>Create</button>
                    <Link to="/">Back to home</Link>
                </Form>

            </Formik>
        </div>
    </>
)
}