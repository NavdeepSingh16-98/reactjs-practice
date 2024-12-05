import { Fragment,useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"; 

function Data(){

const [body,setBody] = useState([]);
const dispatch = useDispatch()
const loading = useSelector(state => state.data.loading)
useEffect(()=>{
const getData = async()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).catch(err => console.log(err));

    setBody(data);
}
getData()
},[])

const bodyElement = body && body.map((el)=><li key={el.id}><h3>{el.title}</h3><p>{el.body}</p></li>)
    return(<Fragment>

<h1>Data Below</h1>
<ul>
    {bodyElement}
</ul>
    </Fragment>
        
    )
}

export default Data;