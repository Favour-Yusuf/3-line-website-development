"\"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface PartnersModalProps {
  isOpen: boolean
  onClose: () => void
}

const PartnersModal = ({ isOpen, onClose }: PartnersModalProps) => {
  const partners = [
    { name: "Interswitch", logo: "/interswitch.png", width: 120 },
    { name: "Union Bank", logo: "/union_bank.png", width: 120 },
    { name: "Access Bank", logo: "/access_bank.png", width: 120 },
    { name: "TAJ Bank", logo: "/taj.png", width: 120 },
    { name: "UBA", logo: "/uba.png", width: 120 },
    { name: "Zenith", logo: "/zenith.png", width: 80 },
    { name: "Alerzo", logo: "/alerzo_main.png", width: 100 },
    { name: "NIBSS", logo: "/nibss.png", width: 120 },
    { name: "Fidelity", logo: "/fidelity.png", width: 120 },
    { name: "Providus Bank", logo: "/providus_bank.png", width: 120 },
    { name: "Parralex", logo: "/parralex_logo.png", width: 120 },
    { name: "Sterling Bank", logo: "/sterling_bank.png", width: 120 },
    { name: "Optimus Bank", logo: "/optimusbank.png", width: 120 },
    { name: "NowNow", logo: "/nownow.JPG", width: 120 },
    { name: "PalmPay", logo: "/palmpay.png", width: 120 },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto p-0 rounded-xl">
        <div className="bg-[#B8CFFF] p-4 flex justify-between items-center sticky top-0 z-10">
          <DialogTitle className="text-2xl font-bold">Our Partners</DialogTitle>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-blue-200 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 ${
                index % 2 === 0 ? "bg-white" : "bg-[#EEF3FF]"
              }`}
            >
              <div className="h-24 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={partner.width}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PartnersModal
