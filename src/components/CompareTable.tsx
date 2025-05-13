
import { Car } from './CarCard';

interface CompareTableProps {
  cars: Car[];
  onRemove: (id: string) => void;
}

const CompareTable = ({ cars, onRemove }: CompareTableProps) => {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-luxury-gray">No cars selected for comparison</h3>
        <p className="mt-2 text-luxury-gray/70">Add vehicles to compare their specifications side by side</p>
      </div>
    );
  }

  // Features to compare
  const features = [
    { name: "Make" },
    { name: "Model" },
    { name: "Year" },
    { name: "Price", format: (value: number) => `$${value.toLocaleString()}` },
    { name: "Mileage", format: (value: number) => `${value.toLocaleString()} mi` },
    { name: "Fuel Type" },
    { name: "Transmission" },
    { name: "Color" }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b border-luxury-gray/20"></th>
            {cars.map((car) => (
              <th key={car.id} className="p-4 text-center border-b border-luxury-gray/20 min-w-[220px]">
                <div className="flex flex-col items-center">
                  <div className="w-full h-32 mb-3">
                    <img
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-luxury-black">
                    {car.make} {car.model}
                  </h3>
                  <button
                    onClick={() => onRemove(car.id)}
                    className="mt-2 text-sm text-luxury-gray hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-luxury-silver/10' : ''}>
              <td className="p-4 font-medium text-luxury-black">{feature.name}</td>
              {cars.map((car) => {
                const propertyName = feature.name.toLowerCase().replace(/\s+/g, '');
                const value = (car as any)[propertyName];
                const displayValue = feature.format ? feature.format(value) : value;
                
                return (
                  <td key={car.id} className="p-4 text-center">
                    {displayValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
