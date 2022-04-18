import Link from "next/link";


//faz o mapeamento de um por um
export async function getStaticProps(context) {

    const  {params} = context
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
        )
        const todo = await data.json()

        return {
            props : {todo},
        }
}

//faz o mapeamento de tudo que esta disponivel na API e depois entra em um por um fazendo as paginas
export async function getStaticPaths () {
    const  response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`, 
            },
        }
    })
    return { paths, fallback: false}
}    

export default function Todo({todo}) {

    return(
        <>
        <Link href="/todos">
            <a>Voltar</a>
        </Link>
        <h1>Exibindo o todo: {todo.id}</h1>
        <p>Comentário: la la la ...
            <Link href={`/todos/${todo.id}/comments/1`}><a>Detalhes</a></Link></p>
        </>
     )
}