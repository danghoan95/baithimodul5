import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function DisplayTour(props) {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/tuors').then(c => {
            setTours(c.data);
        })
    }, [])
    const deleteTour = async (id) => {
        if (window.confirm("Can you delete it?")) {
            await axios.delete(`http://localhost:3000/tuors/${id}`);
            const t = await axios.get('http://localhost:3000/tuors');
            setTours(t.data)
            alert("success");
        }
    }
    return (
        <>
            <div>
                <h2>TOUR</h2>
                <Link to={'/create'}>Create</Link>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    {tours.map((c, count = 0) => (
                        <tr>
                            <td>{count + 1}</td>
                            <td>{c.title}</td>
                            <td>{c.price}</td>
                            <td>{c.description}</td>
                            <td>
                                <button onClick={() => deleteTour(c.id)}>delete</button>
                            </td>
                            <td><Link to={"/update/" + c.id}>Update</Link></td>
                        </tr>
                    ))}
                    </thead>

                </table>
            </div>
        </>
    )

}