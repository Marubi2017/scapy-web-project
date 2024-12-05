import React, { useState } from "react";

type PacketType = "ARP" | "IP" | "DNS";

interface PacketField {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const packetFields: Record<PacketType, PacketField[]> = {
  IP: [
    { name: "version", type: "number", placeholder: "IP Version (default: 4)", required: false },
    { name: "ttl", type: "number", placeholder: "Time to Live (64 or 128)", required: true },
    { name: "src", type: "text", placeholder: "Source IP (e.g. 66.35.250.151)", required: true },
    { name: "dst", type: "text", placeholder: "Destination IP (e.g. 192.168.5.21)", required: true }
  ],
  ARP: [
    { name: "src", type: "text", placeholder: "Source MAC (e.g. 00:11:22:33:44:55)", required: true },
    { name: "dst", type: "text", placeholder: "Destination MAC (e.g. ff:ff:ff:ff:ff:ff)", required: true },
    { name: "op", type: "number", placeholder: "Operation (1 for request, 2 for response)", required: true },
    { name: "hwsrc", type: "text", placeholder: "Sender MAC Address", required: false },
    { name: "psrc", type: "text", placeholder: "Sender IP Address", required: true },
    { name: "hwdst", type: "text", placeholder: "Target MAC Address", required: false },
    { name: "pdst", type: "text", placeholder: "Target IP Address", required: true }
  ],
  DNS: [
    { name: "src", type: "text", placeholder: "Source IP", required: true },
    { name: "dst", type: "text", placeholder: "Destination IP (e.g. 8.8.8.8)", required: true },
    { name: "sport", type: "number", placeholder: "Source Port (random)", required: true },
    { name: "dport", type: "number", placeholder: "Destination Port (default: 53)", required: true },
    { name: "qr", type: "number", placeholder: "Query Response (default: 0)", required: true },
    { name: "rd", type: "number", placeholder: "Recursion Desired (default: 1)", required: true },
    { name: "qname", type: "text", placeholder: "Domain Name (e.g. www.example.com)", required: true },
    { name: "qtype", type: "text", placeholder: "Query Type (e.g. A)", required: true }
  ]
};


const ScapyForm = () => {
  const [selectedPacket, setSelectedPacket] = useState<PacketType>("IP");
  const [formData, setFormData] = useState({});

  const handlePacketTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPacket(e.target.value as PacketType);
    setFormData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you'll add the API call to your backend
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Packet Type
          </label>
          <select
            value={selectedPacket}
            onChange={handlePacketTypeChange}
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
          >
            {Object.keys(packetFields).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {packetFields[selectedPacket].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {field.name}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Packet
        </button>
      </form>
    </div>
  );
};

export default ScapyForm;
