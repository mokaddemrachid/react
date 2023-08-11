import  { React, useEffect, useState } from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export default function Home() {
    const [posts, setPosts]=useState([])


    useEffect(() =>{axios.get(`https://www.harmonystore01.com/api/get_All_product`)
    .then(res =>setPosts(res.data))
  },[])


  const [Product_material, setProductMaterial] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image_url, setImageUrl] = useState("")
  const [price, setPrice] = useState(0)
  const [price_promo, setPricePromo] = useState(0)
  const [product_name, setProductName] = useState("")
  const [quantity_in_stock, setQuantity] = useState(0)

const handleSubmit=()=>{
  axios.post(`https://www.harmonystore01.com/api/Create_product`,{
    Product_material : Product_material,
    category : category,
    description : description,
    image_url : image_url,
    price : price,
    price_promo : price_promo,
    product_name : product_name,
    quantity_in_stock : quantity_in_stock,
  })

.then((res) => {
  console.log(res)
});
}

  return (
    <div>
      {console.log(posts)}
      <Typical 
      steps ={['Bienvenue',1000,'Bienvenue à tous',1000]}
      loop={Infinity}
      wrapper="p"/>
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product_material</Form.Label>
        <Form.Control type="text" placeholder="Enter Product_material" onChange={((e)=>setProductMaterial(e.target.value))} />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" onChange={((e)=>setCategory(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={((e)=>setDescription(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>image_url</Form.Label>
        <Form.Control type="text" placeholder="Enter image_url" onChange={((e)=>setImageUrl(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" onChange={((e)=>setPrice(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>price_promo</Form.Label>
        <Form.Control type="number" placeholder="Enter price_promo" onChange={((e)=>setPricePromo(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>product_name</Form.Label>
        <Form.Control type="text" placeholder="Enter product_name" onChange={((e)=>setProductName(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>quantity_in_stock</Form.Label>
        <Form.Control type="number" placeholder="Enter quantity_in_stock" onChange={((e)=>setQuantity(e.target.value))}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit"
      onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </>
    </div>
  )
}