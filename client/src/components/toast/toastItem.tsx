const getBackgroundColor = (type: string) => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "error":
      return "#f44336";
    case "info":
    default:
      return "#2196f3";
  }
};

const ToastItem = ({ toast }: { toast: { id: number; message: string; type: string } }) => {
  return (
    <div style={{
      padding: "10px 20px",
      color: "#fff",
      backgroundColor: getBackgroundColor(toast.type),
      borderRadius: 8,
      minWidth: "200px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      {toast.message}
    </div>
  );
};

export default ToastItem;
