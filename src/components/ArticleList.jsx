export default function ArticleList({ article, handleChange, handleRemove }) {


    return (

        <li className="list-group-item">
            {article.title}
            <button onClick={() => handleChange(article.id)} className="btn btn-sm ms-5">
                <i className="bi bi-pencil-square"></i>
            </button>
            <button onClick={() => handleRemove(article.id)} className="btn btn-sm ms-1">
                <i className="bi bi-trash-fill"></i>
            </button>
        </li>

    )
}