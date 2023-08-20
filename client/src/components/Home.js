import  React  from 'react'
import Typical from 'react-typical'

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';





export default function Home() {


  return (
    <div>
      
      <Typical 
      steps ={['Bienvenue',1000,'Bienvenue à tous',1000]}
      loop={Infinity}
      wrapper="p"/>
    {/* <>
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
    </> */}
    </div>
  )
}