
import { useState } from "react"


export default function Main({ articles }) {


    const [title, setTitle] = useState('A title')
    const [newTitle, setNewTitle] = useState(articles)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(title);
        const newTitleObj = {
            id: newTitle.length + 1,
            title
        }
        console.log(newTitleObj);
        setNewTitle([...newTitle, newTitleObj])
    }

    function handleRemove(id) {
        console.log(id);
        const updatedArticles = newTitle.filter(article => article.id != id)
        setNewTitle(updatedArticles)
    }

    function handleChange(id) {
        console.log(id);
        // const updatedArticle = articles.find(article => article.id === id)
        // updatedArticle.title = prompt("enter the edited title")
        // console.log(updatedArticle);
        // console.log(articles);
        // setNewTitle(articles)

        newTitle.map(article => {
            if (article.id === id) {
                article.title = prompt("enter the edited title")
                return
            }
        })

    }


    return (
        <main>
            <div className="container">
                <div className="row align-items-center pt-4 flex-column">

                    <div className="col-6">
                        <div className="card mb-3">
                            <form onSubmit={e => { handleSubmit(e) }}
                                className="d-flex flex-column align-items-center  bg-light">

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

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">

                            <ul className="list-group list-group-flush text-center">
                                {newTitle.map(article => {

                                    return (

                                        <li key={article.id} className="list-group-item">
                                            {article.title}
                                            <button onClick={() => handleChange(article.id)} className="btn btn-sm ms-5">
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button onClick={() => handleRemove(article.id)} className="btn btn-sm ms-1">
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}