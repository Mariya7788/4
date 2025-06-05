import React from 'react';
import Header from '../header/header';
import '../cart/cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import {
  addTocart,
  clearCartItem,
  decreaseCart,
  getTotals,
  removeCartItem,
} from './cartslice';
function Cart() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  function detail(id) {
    history.push(`/singledish?id=${id}`);
  }
  function remove(ele) {
    dispatch(removeCartItem(ele));
  }
  function decrease(cartitem) {
    dispatch(decreaseCart(cartitem));
  }
  function increase(cartItem) {
    dispatch(addTocart(cartItem));
  }
  function clearcart() {
    dispatch(clearCartItem());
  }
  function order() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('modalClose');

    modalOverlay.classList.add('active');
    // Скрываем модальное окно при клике на OK
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    // Скрываем модальное окно при клике вне его области
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });

    dispatch(clearCartItem());
  }
  let profile = JSON.parse(sessionStorage.getItem('profile'));

  return (
    <div className="cart-bg">
      <Header />
      <div className="cart">
        <h1 style={{ padding: '10px' }}>Корзина</h1>
        {cart.cartItems.length === 0 ? (
          <div style={{ marginBottom: '165px', padding: '10px' }}>
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <div className="cart-main">
            <div className="cart-main-head">
              <h3 className="cart-main-head-h3">Товар</h3>
              <h3>Цена</h3>
              <h3>Количество</h3>
              <h3>Итого</h3>
            </div>

            {cart.cartItems?.map((cartItems) => (
              <div key={cartItems.id} className="cart-main-body">
                <div className="cart-main-body-div">
                  <img
                    src={cartItems.url}
                    alt={cartItems.title}
                    onClick={() => detail(cartItems.id)}
                  />
                  <div style={{ paddingLeft: '5px' }}>
                    <h3>{cartItems.title}</h3>
                    <button onClick={() => remove(cartItems)}>Удалить</button>
                  </div>
                </div>

                <div className="cart-main-body-div2">
                  <h5>₽{cartItems.rate}</h5>
                </div>

                <div className="quantity">
                  <button onClick={() => decrease(cartItems)}>-</button>
                  <span>{cartItems.cartQuantity}</span>
                  <button onClick={() => increase(cartItems)}>+</button>
                </div>

                <div className="cart-main-body-div2">
                  <div style={{ color: 'green', fontSize: '23px' }}>
                    ₽{cartItems.cartQuantity * cartItems.rate}{' '}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '1100px',
                marginLeft: '10px',
              }}
            >
              <div>
                <button
                  className="clearCart-button"
                  onClick={() => clearcart()}
                >
                  {' '}
                  Очистить корзину{' '}
                </button>
              </div>
              <div>
                <p>
                  Итого{' '}
                  <span style={{ fontSize: '12px' }}>*включая все налоги*</span>
                  :{' '}
                  <b>
                    <span style={{ fontSize: '23px' }}>
                      {' '}
                      ₽{cart.totalAmount}/-
                    </span>
                  </b>
                </p>

                <button className="Order-button " onClick={order}>
                  Заказать
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <div class="modal-overlay" id="modalOverlay">
        <div class="modal-window">
          <h2 class="modal-title">Внимание!</h2>
          <div class="modal-content">
            {profile?.company
              ? `Ваш заказ для компании "${profile.company}" успешно оформлен!`
              : `Ваш заказ успешно оформлен!`}
          </div>
          <button class="modal-close" id="modalClose">
            OK
          </button>
        </div>
      </div>
      ;
    </div>
  );
}
export default Cart;
