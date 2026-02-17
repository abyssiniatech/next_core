

const page =async({params}:{params:Promise<{reviewid:string,productid:string}>}) => {
     const {reviewid,productid} =await params
    return (
    <div>
       <h1>review id :{reviewid}  productid:{productid}</h1>
    </div>
  )
}

export default page
