import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Wand2 } from "lucide-react"

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Playground</h1>
        <p className="text-muted-foreground">
          Interact directly with the on-device models.
        </p>
      </div>
      <Tabs defaultValue="text-model" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text-model">M1: Text Model</TabsTrigger>
          <TabsTrigger value="multimodal-model">M2: Multimodal Model</TabsTrigger>
        </TabsList>
        <TabsContent value="text-model">
          <Card>
            <CardHeader>
              <CardTitle>Text Model (Llama 3.1 8B)</CardTitle>
              <CardDescription>
                An instruction-following model for text-based tasks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-prompt">Your Prompt</Label>
                <Textarea id="text-prompt" placeholder="e.g., Write a short story about an AI assistant." className="min-h-32" />
              </div>
              <div className="space-y-2">
                <Label>Response</Label>
                <Card className="min-h-32 bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">The model's response will appear here...</p>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="multimodal-model">
          <Card>
            <CardHeader>
              <CardTitle>Multimodal Model (LLaVA 1.6)</CardTitle>
              <CardDescription>
                A model that can understand both text and media inputs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                <Label>Media Input (Image/Audio)</Label>
                <div className="flex h-32 w-full items-center justify-center rounded-md border-2 border-dashed">
                  <div className="text-center text-muted-foreground">
                    <FileUp className="mx-auto h-8 w-8"/>
                    <p>Drag & drop or click to upload</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="multimodal-prompt">Your Prompt</Label>
                <Textarea id="multimodal-prompt" placeholder="e.g., What is in this image?" />
              </div>
               <div className="space-y-2">
                <Label>Response</Label>
                <Card className="min-h-32 bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">The model's response will appear here...</p>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
