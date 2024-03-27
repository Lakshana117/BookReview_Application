import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './AddBook.css';
//import logo from '../components/books1.jpg';

function NewBook({addBook}){
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [author, setAuthor] = useState("")
    const [published, setPublished] = useState("")
    const [publisher, setPublisher] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [sold, setSold] = useState("")
    const [description, setDescription] = useState("")
    const [cover, setCover] = useState("")
    const [pages, setPages] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newbook = {
            title:title,
            subtitle:subtitle,
            author:author,
            published:published,
            publisher:publisher,
            price:price,
            quantity:quantity,
            sold:sold,
            description:description,
            pages:pages,
            cover:cover
        }
        fetch("https://book-data.onrender.com/books",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newbook)
        })
        .then(res => res.json())
        .then(data => addBook(data))

        setInputClear()

        navigate('/');
        
    }

    function setInputClear(){
        setCover("")
        setTitle("")
        setSubtitle("")
        setAuthor("")
        setPrice("")
        setQuantity("")
        setSold("")
        setPages("")
        setPublisher("")
        setPublished("")
        setDescription("")
        
    }
    return (
        <div className='fastimg'>
            {/* <div style={{ display: 'flex', alignItems: 'right' }}>
                            <img src={logo} alt="Logo" style={{ height: '250px',width:'1300px' }} className="img" />
                        </div> */}
                        {/* </div> */}
        <form className="bg-dark text-white" onSubmit={handleSubmit} id="addBook">
            <p className="text-center mb-3" style={{fontSize:"25px"}}>Give your valuable Review here:)</p>
            <div className="mb-3">
                <label for="cover" className="form-label">Cover</label>
                <input type="text" className="form-control" id="cover" value = {cover} placeholder="https://www.jkrowling.com/wp-content/uploads/2016/10/HPATPS_Hero_OnGrey.png" onChange={e => setCover(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} placeholder="Harry Potter and the Philosopher's Stone" onChange={e => setTitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="subtitle" className="form-label">Subtitle</label>
                <input type="text" className="form-control" id="subtitle" value={subtitle} placeholder="An edition of Harry Potter and the Philosopher's Stone" onChange={e => setSubtitle(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="author" className="form-label">Author</label>
                <input type="text" className="form-control" id="author" value={author} placeholder="J. K. Rowling" onChange={e => setAuthor(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="price" className="form-label">Price </label>
                <input type="number" className="form-control" id="price" value={price} placeholder="Affordable or not Affordable" onChange={e => setPrice(e.target.value)}/>

            </div>
            <div className="mb-3">
                <label for="quantity" className="form-label">Positive comments</label>
                <input type="number" className="form-control" id="quantity" value={quantity} placeholder=" Harry Potter is such an interesting book...." onChange={e => setQuantity(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="sold" className="form-label">How much satisfied with the book</label>
                <input type="number" className="form-control" id="sold" value={sold} placeholder="100%" onChange={e => setSold(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Negative comments</label>
                <input type="text" className="form-control" id="description" value={description} placeholder=" Any wrong ideas or thoughts in the book" onChange={e => setDescription(e.target.value)}/>  
            </div>
            
            <div className="mb-3">
                <label for="published" className="form-label">If ordered delivery date</label>
                <input type="date" className="form-control" id="published" value={published} placeholder="Any wrong ideas or thoughts in the book" onChange={e => setPublished(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="publisher" className="form-label">Any recommendations</label>
                <input type="text" className="form-control" id="publisher" value={publisher} placeholder="Suggest better books" onChange={e => setPublisher(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label for="pages" className="form-label">Any queries</label>
                <input type="number" className="form-control" id="pages" value={pages} placeholder="Any problems or bugs" onChange={e => setPages(e.target.value)}/>
                
            </div>   
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>/
        </div>
    )

}

export default NewBook