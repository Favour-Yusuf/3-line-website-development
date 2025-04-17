import { MapPin, Phone, Mail, Clock } from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-medium">Head Office</h3>
            <p className="text-gray-600">
              123 Payment Street, Victoria Island
              <br />
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">+234 (0) 123 4567 890</p>
            <p className="text-gray-600">+234 (0) 987 6543 210</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">info@3line.com</p>
            <p className="text-gray-600">support@3line.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-2">Regional Offices</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Abuja: 45 Federal Avenue, Central District</li>
          <li>Port Harcourt: 78 Oil City Road</li>
          <li>Accra: 23 Independence Avenue, Ghana</li>
          <li>Nairobi: 56 Kenyatta Boulevard, Kenya</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo
