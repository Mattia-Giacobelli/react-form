import Form from "./Form"
import { useState } from "react"


export default function Main({ array }) {

    const articles = [
        { id: 1, title: "Come iniziare con il minimalismo digitale" },
        { id: 2, title: "10 ricette veloci per cene infrasettimanali" },
        { id: 3, title: "Guida pratica al lavoro remoto produttivo" },
        { id: 4, title: "Fotografia urbana: catturare la città di notte" },
        { id: 5, title: "Sostenibilità in casa: piccoli cambiamenti, grande impatto" },
        { id: 6, title: "Imparare JavaScript: consigli per i primissimi passi" },
        { id: 7, title: "Viaggiare low-cost: itinerari per il weekend" },
        { id: 8, title: "Mindfulness quotidiana per ridurre lo stress" },
        { id: 9, title: "Coltivare un orto sul balcone: guida per principianti" },
        { id: 10, title: "Design di interfacce: regole per una UX efficace" },
        { id: 11, title: "Libri da leggere prima dei 30 anni" },
        { id: 12, title: "Organizzare il tempo: tecniche di pianificazione settimanale" }
    ]

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
        setNewTitle([...articles, newTitleObj])
    }

    function handleRemove(id) {
        console.log(id);
        const updatedArticles = articles.filter(article => article.id != id)
        setNewTitle(updatedArticles)
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
                                            <button onClick={() => handleChange(article, article.id)} className="btn btn-sm ms-5">
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