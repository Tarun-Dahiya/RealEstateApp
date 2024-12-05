// src/components/PropertyList.tsx

import { FC, useState, useEffect } from 'react'
import { Property } from '../lib/types'
import { properties } from '../data/properties'

const Properties: FC = () => {
    const [propertyList, setPropertyList] = useState<Property[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [filter, setFilter] = useState<string>('');

  // Simulate API call to fetch properties (you can replace this with actual API call)
    useEffect(() => {
        setTimeout(() => {
            setPropertyList(properties); // Set mock data
            setIsLoading(false); // Set loading state to false
        }, 1000)
    }, [])

  // Format price to USD format
    const formatPrice = (price: number): string => {
        return `$${price.toLocaleString()}`
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    };
    
      // Filter properties based on name and location
    const filteredProperties = propertyList.filter((property) => {
        return (
            property.name.toLowerCase().includes(filter.toLowerCase()) ||
            property.location.toLowerCase().includes(filter.toLowerCase()) ||
            property.type.toLowerCase().includes(filter.toLowerCase())
        );
    });

    return (
        <div className="property-list container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">Properties for Sale</h1>

            <div className="mb-6">
                <input
                type="text"
                placeholder="Search by name, location or type..."
                value={filter}
                onChange={handleFilterChange}
                className="p-2 border border-gray-300 rounded-lg w-full"
                />
            </div>

            {isLoading ? (
                <div>Loading...</div> // Display loading indicator
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                    <div key={property.id} className="property-card bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                        <h2 className="text-xl font-semibold">{property.name}</h2>
                        <p className="text-gray-500">{property.location}</p>
                        <p className="text-gray-700">{property.description}</p>
                        <div className="mt-4">
                            <span className="text-lg font-bold">{formatPrice(property.price)}</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-sm text-blue-500">{property.type}</span>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <div>No properties found matching your filter.</div>
                )}
                </div>
            )}
        </div>
    )
}

export default Properties
