export default function Main({ array }) {


    return (
        <main>
            <div className="container">
                <div className="row justify-content-center pt-4">
                    <div className="col-6">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                {array.map(article => {

                                    return (

                                        <li key={article.id} class="list-group-item">
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