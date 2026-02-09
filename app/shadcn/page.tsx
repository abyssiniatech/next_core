import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const page = () => {
  return (
    <div className=" max-w-md p-2 mx-auto flex flex-col items-center justify-center gap-4 border border-gray-400 m-2 rounded bg-gray-100 min-h-screen">
       <section className="w-auto text-center p-4 rounded text-gray-700">
      <h1 className="text-2xl font-bold">Shadcn Accordion</h1>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </section>
      
      <section className=" w-auto p-4 rounded">
      <h1 className="text-2xl font-bold">Shadcn card</h1>
      <Card className="p-10 border border-gray-400 rounded">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>


    </div>
  )
}

export default page
