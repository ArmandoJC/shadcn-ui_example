'use client'

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"



export default function Page() {

  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog
        // onOpenChange={value => console.log({ value })}
        onOpenChange={value => setDialogOpen(value)}
        open={dialogOpen}
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>

          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log('Cancelar')}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log('Continuar')}>Continue</AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>

    <Button onClick={()=> setDialogOpen(true)} >Open dialog manualmente</Button>

    </div>
  );
}