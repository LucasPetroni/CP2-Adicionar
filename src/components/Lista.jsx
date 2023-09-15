import Cabecalho from "./Cabecalho"
import { Link } from "react-router-dom"


export default function Lista() {
    return (
        <>
           <Cabecalho>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
           </Cabecalho>
        </>
    )
}