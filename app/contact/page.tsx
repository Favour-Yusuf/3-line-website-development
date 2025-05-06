import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#EEF3FF]">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
