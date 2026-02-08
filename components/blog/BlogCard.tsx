import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogCard() {
  return (
    <Card className="hover:shadow-xl transition">
      <CardHeader>
        <CardTitle className="text-xl">
          How to Learn Next.js
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          A complete guide to mastering Next.js step by step.
        </p>

        <Button variant="outline">Read More</Button>
      </CardContent>
    </Card>
  )
}
