import Form from "./Form"


export default function Main({ array }) {


    return (
        <main>
            <div className="container">
                <div className="row align-items-center pt-4 flex-column">

                    <div className="col-6">
                        <div className="card mb-3">
                            <Form />

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">

                            <ul className="list-group list-group-flush text-center">
                                {array.map(article => {

                                    return (

                                        <li key={article.id} className="list-group-item">
                                            {article.title}
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