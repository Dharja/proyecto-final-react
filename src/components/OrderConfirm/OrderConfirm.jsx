import { useParams } from "react-router-dom";



function OrderConfirm() {
  const { orderid } = useParams();

  return (
    <div style={{ background: "linear-gradient(to bottom, #000033, #000066)" }}>
      <h1 style={{ color: "white" }}>Gracias por comprar tus pasajes con nosotros!</h1>
      <small style={{ color: "white", fontSize: "1.2em" }}>Este es tu comprobante de compra: <span style={{ fontWeight: "bold", color: "yellow" }}>{orderid}</span></small>
    </div>
  );
}
export default OrderConfirm;

