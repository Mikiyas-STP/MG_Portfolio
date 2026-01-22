interface StatCardProps {
  label: string;
  value: string | number;
  loading?: boolean;
}

const StatCard = ({ label, value, loading = false }: StatCardProps) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg animate-pulse w-32">
        <div className="h-8 w-16 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow w-32">
      <span className="text-2xl font-bold text-slate-900">{value}</span>
      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{label}</span>
    </div>
  );
};

export default StatCard;