import { useState } from "react";
import { useCart } from "./context/CartContext";
import "./App.css";

const shoes = [
  {
    id: 1,
    name: "U.S. POLO ASSN. Mens PanalSneaker",
    price: 989,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwYBAY6QPaxA9aaXnYupN3SXQ0vWVqdCkyiDSNNiqTg&s=10",
  },
  {
    id: 2,
    name: "ASIAN Men's Sports Shoes",
    price: 628,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFMl8Ksitx1yeOCmEVrbwXNS6ur308cKDQOwImT_Ylg&s=10",
  },
  {
    id: 3,
    name: "White Casual Sneaker",
    price: 770,
    image:
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADrbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAETAAAPewAAAChpaW5mAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAABqaXBycAAAAEtpcGNvAAAAFGlzcGUAAAAAAAACWAAAAlgAAAAQcGl4aQAAAAADCAgIAAAADGF2MUOBBAwAAAAAE2NvbHJuY2x4AAIAAgAGgAAAABdpcG1hAAAAAAAAAAEAAQQBAoMEAAAPg21kYXQSAAoKGSZleV+CBAQNCDLqHhIAAooooUD0vw0VnmhlrSvYXzcWyKzfxwp4n89t+DkdMVQCiw9rAR3V/sM0paeSl1seiP0UthAZ0IDBMoRp1xWOrgjrUJrLB72lSdnyDff2EQIqcYiz1qIV/D4lrqvpUsFqZ/jBIYpNSxEVeVKvInLJrL3WUY91I/0XlawRf/BJUVy2CXoDvA3dmXcqzhd9fVz+aWhwGM3ruyhbqEbCqLN5XDjheYBYcPJPO3bd68L+RVUxqRb/5KJJWpGIEcb+nWAN6WjkCEuAGKdHfLXlp6QN+NTPds5ZpSWIYS708IKd8PSR6Vpzlcu74DL1gJq2rTKwJnZhpKbstLyZtwd2MFaxlWeZ85Tq0drA/yyC/aYlg6I6+D2lY0DvX2hpRT12np8mZ3UCgzz48fgEPdCcWlVwNAUQ2R4HtHvpdkCvXFQIgSBvAKStOgBEG7grdmcX67uElZVeSeVtPKXw4j0ijLnR19B9ylX7gVyB8T1jISCq6actkjM21WiFmC522CjVsL1DhO61NknOB0uASo83+/tLIcWcDlJHlgOyocHjH3nOGa/Tn2iueONVw1UJ2SgJq9Dc535YTA2WmUF5bLFSVvh3pD5qqE/UQ5wSWnJtJlzxXnKc32lT/o++bBSEOCY6zCSaJ4ZCDohILYuNm7O4IslOVg1pbSjto0oYNdMY3khIUNRu26tuhXiqa4JEjUNYas/tiSUxLaIY6MGSPRN09BzM9MShse+mVJ1T1b+hwebiv6wl5OS43ARKi2QJXEljvLjpBudphKTO/c3l7UPceILtWbWNtDozRLNhwVHc6wke3WTknq8xvT2lDGD/oUi3I1dHZEp95la6T44HmSKom+4loP+cDFvkicB2ie5Cb8NDpUwTClMQv2Pb9ctq4jTftw/0eZTfHFzjQsJavKKgUvlghK/c0Fremz5p7xHXpkOzIpuaqcedj1lHPxZVV7C2pwZ5bzoksXG0Zsa0/bYXj4tiRlD7GVzPvNKTRPxfoyU9ZFniZRdHykIjB22UVuhlHIztAgx7PT0EtQLecjYULYO7+HkRSadPhCZQm2HIq93ufZCa0GquurBx3xVRA/ZgSZkHO0iY70tK+xR+S+W1MbjrgCxPtD+DOCuPgW1wPcAl7ZWbHeULkm+8nJJDBW+ZwFSR0+xNNrIm622VpciFA9bYi0sCB6IkMqo8xQudnwrpzyVGmG+W7+BtD58Ib235uknVlN24j2zRiPAAlMMVaHwLWfp5ckoyQW2Cac1cZVEoQdSMWvZQBVDgGB4yq8hQ2uGzsAuPIjfviRgI8DY34vMHADBzCQWzs9O4DqgTbqB2pN4eF9xOoGx1x54cDE6spMQ7nq7RsEMFun3u9s/0vh968q1DWw5yMV9qYzqAG1KJkQRi2PrEWiJCE54/oA0R7enqaStU78FdXHpBciBP7RkqS6X+SBMsk2YYhVHZCTmdfAZH1Fa9vdn0BU52S/B6THjPZAH6w/0wScwd9MKDmyZGASvNIFqIb39jM8A3dSlzbBcEM0SpdEcTkq/r2m0aVjWeRS6AK2T+wvnTmHYv7Uv0OSQ8IeUS7da+pPayEaGPKGuPUdGKunxofHlRNejxbONKDiRErt8GcdycNecjSURy4WlVMpLEIX6zKIBOuA1o+5KtEGEwMNMhCqephldzqedejk+AXIeX8/vI0gTEIh4fS23aNDV6Vo1sYNm5UssLYsX4pJ6jBTDI1Xhftbud+3Jhy4NgLfNEEs0Y024dQOPp8x4ocv8Yu+j01aiWyzFWBM2N/gXqQovOrjdOdkCDLLH/jL5KU5CV9DsL/8OH6r7v950r1viz2zfAF+wgtU+E6SZD6FylrArwbqMLwPsX3xvEuHrzBfwyAxGm3ivHsKhnF8E03UK1/l4Zfca0FBpD0uCja0bhUGP5/2WpOAF7ou0BzHTnHhtC/36jAbG1Mc5KUTOrkq+r11iAuzOhQ0xzyhd5uoalyxrOQ/WnIK1kvCQu05nqW+Qvb/1m/r6ehGwzLj9jPP2WUeyma3BRKWUbK7SyshtL3moeu+QfXIgUraUZEtpzvmfswElsIN09qlO/wcUIzrRpaeBBdZ5rQUiIQFvju+ABsr5AndbI3Mkcg2hbpq+hgM0Xsl1LyW3YS+bSEtpn7Ijtcp1w+BOOlfEzq20fpn9Tj32vjuhPV5uK/se82OOR383BQGMliZNTmgmqgyBQEUTh6DvS95PwexPaIPw39e+t4u1nJgqM8CNVS0qHIGnBeFx+YgU/V1NTlptnAnykUw8+fvwxvSxJnc5GL98fvBZaef/f1ErxzjS6+WzmqHjiJBxtcQ3/6U5okuI7BsQcJXBi4LnepHUUmyhCu1YLWhNlE00me4WPkez9kHoe/csO5vsqoVEaEHGmBdS3kpHLDYjyvNhcJ61qYdhBQXThCT5V8eiNFoZFvn1F/MrYZiSbgVKUoohXteAxG92oRrVEh3D8ZFgCN5v7kvCBe89Fr+fdXMsL582DGCXaROIRBgjiK0azucewG8EGH5RLmY+9Oo91Bolq7FA9Qgz1PSYRCaOGx+F8UGFaZtnn1a58rffvvq8MN92nQqkF4K+V8OhBPjxxGDlkJ7roecejsHn8JBzFV/oHT0sdk7yqqFFgFRU7HyJQOUlhigmeRiIg5CCLRtIzq1zYUjdeipDYqy2yd70Jsg8GtMP7OIy6TdhU061s0SOIG3QG9phv7em6kNPk1/uU6JO/CD8hBHcnzO8ulnW5VZ7OaGWFdwhhDyBBRv/IKoOv19G05qbhmihgRtN2DbNfy2EpA/d7TKigl3GwF67psgenU6mPERh87cgNK81dongxo2HaNcd+CFLDbsIyoWP+ZXrrG/pOWLAE/CZgOkPgqginrx3DT+SmmHqt6GzeVs19wRgp2mot2o1BUu8d64zt7NWuYGQeE2LX0FVAB2SS+xcCmIxG8xzY1gOBaDjhvBBVO0ol0seMBOCJG2s5x5WPZQpiT0vrPYm7e2Vj+alGkSywi+KHEoibn8p+DC1zrLtJEOC8pxt+kn8z3crb738valQiJ4HBS0aiLrJ1uSLl7A3j3hwri/k+I+huZ5ShphGO0k5gnhS0dphmHIwvgvTBOrzM+CTmylpADil1zkI83aD+FG1Yq+0Vfs3KPk4BR4iu9eJ+A9pfkdA4VMhuZA6D/J8f80WQHmM/BuvjPvpjxf9NxpJBfOPqkgbGxPsYkl2cICfoW4T5j7pmBghNVAxkWhD0Z/zFTtcoJ0sJuN5cFAvbq0V22a2ACEF2hByJZUd49cf7+GKJ+lA++SB+qJ+l7NvWtoOdC1UhQSseK11Z9i14tR3QxmPlyCrMSVW8RiU4sTcTyaFX2nFkVlsaBetlK7qcM/v55ijPOjae7ycjP4HbnSW8NPWKIi8vO7nwUw5KsDcpg255ZOBbg7g8zmeft9giNRBq1moH+yY+lCikohjFyeO8lI9I6oqrD5oqvSIuCfWRNmdE6fajWzmm3dqDnApw3o8/Gn1Jx3qpTSzCSZpCcGIsLgawudXhKkWwhDAofn+nxJL4aqauAM/2OhsV4bHfUtcg4AM8NkhxuKvevRJkAg2tbBHOWdQpjOENE00Wcr9pn0UfyqMiTZzhbcyY3U93cpT7/AFjHe2F9yopbFnObDDP36lA7Sfu2HcaQmRxOJyFQOew6KE5xtghpemGVqT4VxOKi/cYYBLlmbEn5GsHvxGJ6/SlxUqw6K5slJyumXEyzjMHK3ieyVCKkSmOzEl5T/ExxeHQjWxApa99sYZau0IjOmCi0xRbGknLcxwewAhigzRW1z3PWU5RSJGLUVkCjnYg0PuQpOpNjBFvWVPwmdcTu9MnhEk/WL/sfahznVVE2ksQ8K7IR10bgpym5KxH/9e6upan0PT1P8Tk+nuXdAoLJV5pOYxnR0yUOz/ztWRUj7ConXLe1HJq8jgmp6c388J9LQw/S6CU59kf6px/KGb2dN9oZ2AQ9cELzMjlQ0jAfVtXDrL0Z6n6kEWC8VEptQa15T5Cq8M+CiIn/tfvdaekyjTgWFkAAJOdwr7QZTxhhNZH95rrydOjExaadYlyVi0mUd9/soIeKYl2H0JfYmPzmIRsUg2+A586yMOAvW8YmGjU4AhIDNjBJpEMjevmVWx6C+r3J/fyfT/UJx6/fXJebWV7pnbOunQsQhfuEVypagjkKjXTlIJcMx4UpHCAB1jCrcyJfTCWeCmikRyiD07uTK+uIvp4HClNLekktsDaqGnDcyULqDVYdwzzjU9zpNrIJS+W0VQFqKZTVwlnAhj4F4FFCpp5nqz0WlZsqwtJy6gQsijGwXJlZ1pbxvRK8/ko3mGRA9bHEdZkGZqdhyFeuF/iW4YeZhxlOWclftJ0B+L1zcmXME8wYH9a1v6z73RCGM/+9h8yXwLndDeWujsW1QY7JW5ySw99izlYGSzaDC4yHSiiiraItRKfsQBbX90lOGCmhipRIeK59/6jO4KiDq42D3i5lB9nMPV44k5wDy2uyckWeNs4/HKDUWtcmn5yKHc7m0TbA1IynnzWX9yU9/BK35QufiogWdAyUWtecgPcIfaYnDmmnZ2GW0GDbZ+ScCRGikB99rVzVh6TQWQ2AwhbcQc6gmGLuSkPnSdvV3AR0wocMzyLJsV1y4HS8ZdruBIUvxDOYIh8SbzHSzAaYPGahjDX2y8wJ7iu8uleKunHSXXCisg5+79QtBh6HskKcHZ15yhX32gEkIA4Vhd6tN9Tzrppo+elidy7G0aA9f7uGB96E8vxwQRxETUzgZ1m6Sxq8AfdEHLSWx0s07VdNBhBS9rVNJgFm4noeA4vz61IY9kN9Te2S+F4ydiUNxGbqPSPY1LVg4AWbctJwe30iNdqT1DLWMy97A9yzVDYOvIhqU6g45VtYBMdfpOxyjkJpZBmRYibQY/kKj9wmZxpXvjexmvNOWV6tPJp478HbstYizpmEUwar7rRAIOoY0f1QoCIxmXkQm6gy0F9L/bc613ZRx+k9vINboGEuQlome4S8XA2P/aP7zQzqljp56RyG1p6p2pn+uC7RYZaZmPmKCHkA02wohxEfWyM874puOXd2IypmhaBZg3s1zUGlmDpDM4NLSryNWtni9Fut3ijGtjlnRhuq6iLQg7MuCTcscFP5dj7Qj2JrjV8HX6w+pZ1eKM3thpqNBm0o/HcEbKmsi58cJTchNIxd2JjmTAp+ZjMhCFZQ5h0QSe6UpUwIzm3dbu8O/A62++OWer8NaOmLydBPRJMpJHgk1PV96A=",
  },
  {
    id: 4,
    name: "MACTREE Men's Mid Top Ankle Boots",
    price: 950,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSzGyMotbbYd0qeCySnpKW2R5G92r_UVyA-PVSVulUw&s=10",
  },
];

function App() {
  const [showPayment, setShowPayment] = useState(false);

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useCart();

  if (showPayment) {
    return (
      <div className="payment-page">
        <h1>Payment</h1>
        <div className="payment-box">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div className="payment-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <h2>Total: ₹{total.toFixed(2)}</h2>

          <h2>Card Details</h2>
          <input
            type="text"
            placeholder="Card Holder Name"
          />
          <input
            type="text"
            placeholder="Card Number"
          />
          <div className="card-inputs">
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVV" />
          </div>
          <button className="pay-button">
            Pay Now
          </button>
          <button
            className="back-button"
            onClick={() => setShowPayment(false)}
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav>
        <div className="logo">👟</div>

        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
      </nav>
      <div className="main-content">

        <div className="shoe-section">
          <div className="shoe-grid">
            {shoes.map((shoe) => (
              <div className="shoe-card" key={shoe.id}>
                <div className="shoe-image">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                  />
                </div>
                <div className="shoe-info">
                  <h3>{shoe.name}</h3>

                  <p>₹{shoe.price}</p>
                  <button onClick={() => addToCart(shoe)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>
              ))}

              <h2 className="total">
                Total: ₹{total.toFixed(2)}
              </h2>

              <button
                className="payment-button"
                onClick={() => setShowPayment(true)}
              >
                Proceed To Payment
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;