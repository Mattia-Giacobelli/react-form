import { useState } from "react"



export default function Form() {

    const [title, setTitle] = useState('A title')


    return (
        <form className="d-flex flex-column align-items-center  bg-light">

            <div className="mb-2 pt-3 w-75 text-center">
                <label className="form-label">Titolo</label>
                <input
                    onChange={e => { setTitle(e.target.value) }}
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    placeholder='Your title here'
                    value={title}
                />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">Add</button>


        </form>
    )
}