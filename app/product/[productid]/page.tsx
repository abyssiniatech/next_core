export default async function Productid({ params }: { params: Promise<{ productid: string}>}){
    const {productid} =await params
     return <h1>Product id  {productid}</h1>
}