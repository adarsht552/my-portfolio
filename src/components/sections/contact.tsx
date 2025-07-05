"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Mail, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I will get back to you shortly.",
    })
    form.reset()
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Forces With Me</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card border border-border/50">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Your message..." className="min-h-[120px]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full">Send Message</Button>
                      </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="flex flex-col justify-center space-y-6">
                <Card className="bg-card border-border/50">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <a href="mailto:adarsh.tiwari@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                                adarshti552@gmail.com
                            </a>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-muted-foreground">+91 7208694864</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
