
import { useFetch } from "../hooks/useFetch"


export const UsuariosComponent = () => {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h1>Lista de usuarios</h1>
            {isLoading
                ? <h2>Está cargando</h2>
                : errors ?
                    <p>Ha ocurrido un error: {errors}</p>
                    : <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Email</th>
                                <th scope="col">WebSite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return(
                                    <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>

                                )
                            })}
                        </tbody>
                    </table>
            }
        </>
    )
}
