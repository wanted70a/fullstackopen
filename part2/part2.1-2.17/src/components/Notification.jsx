const Notification = ({ notificationMsg }) => {
  if (!notificationMsg) {
    return null;
  }

  const { text, color } = notificationMsg;

  return (
    <div className="notification" style={{ color: color || "red" }}>
      {text}
    </div>
  );
};

export default Notification;
