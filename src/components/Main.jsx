
import { useState } from "react"
import NewArticleForm from "./NewArticleForm"
import ArticleList from "./ArticleList"


export default function Main() {

    const initialArticles = [
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
    const [articles, setArticles] = useState(initialArticles)


    function handleSubmit(e) {
        e.preventDefault()
        console.log(title);
        const newArticleObj = {
            id: Date.now(),
            title
        }
        setArticles([...articles, newArticleObj])
    }

    function handleRemove(id) {
        console.log(id);
        const updatedArticles = articles.filter(article => article.id != id)
        setArticles(updatedArticles)
    }

    function handleChange(id) {
        // console.log(id);
        // const updatedArticle = articles.find(article => article.id === id)
        // updatedArticle.title = prompt("enter the edited title")

        // setArticles(articles)
        const title = prompt("enter the edited title")

        const updated = newTitle.map(article => {
            console.log(article.id);
            console.log(title);
            console.log(article.title);



            if (article.id === id) {

                return {
                    id,
                    title
                }
            } else {
                return article
            }
        })

        setNewTitle(updated)

    }


    return (
        <main>
            <div className="container">
                <div className="row align-items-center pt-4 flex-column">

                    <div className="col-6">
                        <div className="card mb-3">

                            <NewArticleForm
                                handleSubmit={handleSubmit}
                                setTitle={setTitle}
                                title={title}
                            />

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">

                            <ul className="list-group list-group-flush text-center">
                                {articles.map(article => {

                                    return (

                                        <ArticleList
                                            key={article.id}
                                            article={article}
                                            handleChange={handleChange}
                                            handleRemove={handleRemove}
                                        />

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