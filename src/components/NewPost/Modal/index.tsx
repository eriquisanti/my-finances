"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Form from "@/components/NewPost/Modal/Form";

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const onOpenChange = () => setOpen(!open);
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={onOpenChange}
          className="bg-[#606CCB] text-[#fff] font-normal rounded-[8px] text-base hover:bg-[#606CCB] active:scale-90 ease-out duration-75"
        >
          New post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-[8px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-[100%]">
          <Tabs defaultValue="spent">
            <TabsList className="pl-0">
              <TabsTrigger className="pl-0 data-[state=active]:text-green-600" value="spent">Gasto</TabsTrigger>
              <TabsTrigger className="data-[state=active]:text-green-600" value="gain">Ganho</TabsTrigger>
            </TabsList>
            <TabsContent value="spent">
              <Form />
            </TabsContent>
            <TabsContent value="gain">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        <DialogClose
          onClick={onOpenChange}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
