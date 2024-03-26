import { Check, Circle, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader>
        <CardTitle>Defina suas tarefas</CardTitle>
        <CardDescription>
          Adicione as tarefas que você precisa realizar e estime o tempo que
          levará para completá-las.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-6 pb-2">
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Nome da tarefa" />
          <Input className="w-24" placeholder="Temp Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Nome da tarefa" />
          <Input className="w-24" placeholder="Temp Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Nome da tarefa" />
          <Input className="w-24" placeholder="Temp Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Nome da tarefa" />
          <Input className="w-24" placeholder="Temp Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Button className="" variant={'link'} size={'sm'}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar tarefa
          </Button>
          <div className="py-2">
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Gerar Google Meeting
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
