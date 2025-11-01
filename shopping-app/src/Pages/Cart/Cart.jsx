import React from 'react'

const Cart = ({ cart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600">Add some items to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-16 h-16 object-contain bg-gray-100 rounded p-2"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">${item.price} × {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Total</span>
            <span className="text-2xl font-bold text-gray-800">${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart