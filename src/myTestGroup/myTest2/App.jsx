

// 알림 hooks
const useNotification = (title, option) => {
  const fireNotif = () => {
    if(Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if(permission === "granted") {
          new Notification(title, option)
        } else {
          return;
        }
      })
    } else {
      new Notification(title, option)
    }
  }
  
  return fireNotif;
}


export function App() {
  const triggerNotif = useNotification("Hello", {body: "How are you?"});
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hi Click</button>
    </div>
  )
}