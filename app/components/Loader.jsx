export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-lg font-medium">{text}</div>
      </div>
    </div>
  );
}
