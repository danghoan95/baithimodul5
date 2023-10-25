import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function UpdateTour() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState();

    useEffect(() => {
        axios.get("http://localhost:3000/tuors/" + id).then(c => {
            setTour(c.data)
        })
    },[])
 return(
     <>
      <h2>Update</h2>
      <div>
       <Formik initialValues={tour}
               onSubmit={(e)=>axios.put(`http://localhost:3000/tuors/${id}`,e).then(()=>{
                navigate("/")})}
                enableReinitialize={true}
                   >
        <Form>
         <label htmlFor={'title'}>Title</label>
         <Field name={'title'} id={'title'}/>
         <label htmlFor={'price'}>Price</label>
         <Field name={'price'} id={'price'}/>
         <label htmlFor={'description'}>Description</label>
         <Field name={'description'} id={'description'}/>
         <button type={'submit'}>Update</button>
         <Link to="/">Back to home</Link>
        </Form>

       </Formik>
      </div>
     </>
 )

}