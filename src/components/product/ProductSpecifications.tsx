import { Product } from "@/types/product";

interface ProductSpecificationsProps {
  specifications: Product["specifications"];
}

export const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Specifications
      </h2>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={spec.label}
                className={index % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3">
                  {spec.label}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
