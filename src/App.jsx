import React, { useState } from "react";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [page, setPage] = useState("login"); // login | shop | checkout
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("โอนผ่านธนาคาร");

   const products = [
  {
    id: 1,
    name: "RTX 4060",
    price: 10900,
    image: "/images/rtx4060.jpg",
  },
  {
    id: 2,
    name: "RTX 4070",
    price: 18900,
    image: "/images/rtx4070.jpg",
  },
  {
    id: 3,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 4,
    name: "RTX 3050",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 5,
    name: "RTX 3060",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 6,
    name: "RTX 4050",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 7,
    name: "RTX 5060",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 8,
    name: "RTX 5050",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 9,
    name: "RTX 5090",
    price: 65900,
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 10,
    name: "เมาส์ logitech",
    price: 65900,
    image: "https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80/v1654072485/product/product-master/hv89ugkflissijsaklmd.jpg",
  },
  {
    id: 11,
    name: "เมาส์ gaming",
    price: 65900,
    image: "https://speedcom.co.th/cdn/shop/files/Razer-Gaming-Basilisk-V3-Pro_-SpeedCom-325567469.jpg?v=1768891965&width=1214",
  },
  {
    id: 12,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 13,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 14,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 15,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 16,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 17,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 18,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 19,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
  {
    id: 20,
    name: "RTX 4090",
    price: 65900,
    image: "/images/rtx4090.jpg",
  },
];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!address.trim()) {
      alert("กรุณากรอกที่อยู่จัดส่ง");
      return;
    }

    alert(
      `สั่งซื้อสำเร็จ 🎉\n\nลูกค้า: ${username}\nที่อยู่: ${address}\nชำระเงิน: ${payment}\nราคารวม: ${totalPrice.toLocaleString()} บาท`
    );

    setCart([]);
    setAddress("");
    setPage("shop");
  };

  // ================= LOGIN PAGE =================
  if (page === "login") {
    return (
      <div className="login-page">
        <h1 className="logo">⚡ WINAI COMPUTER ⚡</h1>

        <input
          type="text"
          placeholder="กรอกชื่อเพื่อเข้าใช้งาน"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />

        <button
          className="btn-primary"
          onClick={() => {
            if (username.trim() === "") {
              alert("กรุณากรอกชื่อก่อนเข้า");
            } else {
              setPage("shop");
            }
          }}
        >
          เข้าสู่ร้าน
        </button>
      </div>
    );
  }

  // ================= SHOP PAGE =================
  if (page === "shop") {
    return (
      <div className="shop-page">
        <div className="navbar">
          <h2>⚡ WINAI COMPUTER</h2>
          <div>👤 {username}</div>
          <div>🛒 {cart.length} ชิ้น</div>
        </div>

        <div className="banner">
          🔥 โปรโมชั่นเดือนนี้ ลดสูงสุด 10% 🔥
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="card">
              <div className="gpu-image">RTX</div>
              <h3>{item.name}</h3>
              <p className="price">
                {item.price.toLocaleString()} บาท
              </p>
              <button
                className="btn-primary"
                onClick={() => addToCart(item)}
              >
                เพิ่มลงตะกร้า
              </button>
            </div>
          ))}
        </div>

        <div className="footer">
          💰 รวม: {totalPrice.toLocaleString()} บาท
          <br />
          <button
            className="btn-primary"
            style={{ marginTop: "10px" }}
            onClick={() => setPage("checkout")}
          >
            ไปหน้า Checkout
          </button>
        </div>
      </div>
    );
  }

  // ================= CHECKOUT PAGE =================
  return (
    <div className="checkout-page">
      <div className="navbar">
        <h2>🛍️ Checkout</h2>
        <button
          className="btn-primary"
          onClick={() => setPage("shop")}
        >
          ← กลับร้านค้า
        </button>
      </div>

      <h3>📦 รายการสินค้า</h3>

      {cart.length === 0 ? (
        <p>ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div>
              {item.name} - {item.price.toLocaleString()} บาท
            </div>
            <button
              className="btn-danger"
              onClick={() => removeFromCart(index)}
            >
              ลบ
            </button>
          </div>
        ))
      )}

      <h3>💰 รวมทั้งหมด: {totalPrice.toLocaleString()} บาท</h3>

      <h3>🚚 ที่อยู่จัดส่ง</h3>
      <textarea
        className="input"
        placeholder="กรอกที่อยู่..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h3>💳 วิธีชำระเงิน</h3>
      <select
        className="input"
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
      >
        <option>โอนผ่านธนาคาร</option>
        <option>เก็บเงินปลายทาง</option>
        <option>บัตรเครดิต</option>
      </select>

      <br />
      <button
        className="btn-primary"
        style={{ marginTop: "15px" }}
        onClick={handleOrder}
      >
        ✅ ยืนยันการสั่งซื้อ
      </button>
    </div>
  );
}

export default App;
