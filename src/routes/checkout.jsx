import axios from "axios";
import {useEffect, useState} from "react";
import Layout from "../components/layout.jsx";
import {useLocation, useNavigate} from "react-router-dom";

export default function Checkout() {

  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [country, setCountry] = useState('Belgium');
  const [postalCode, setPostalCode] = useState('1020');
  const [city, setCity] = useState('Brussels');
  const [street, setStreet] = useState('Pl. de l\'Atomium');
  const [houseNumber, setHouseNumber] = useState('1');

  useEffect(() => {
    if (!location.state.product) {
      navigate('/');
    }
    setProduct(location.state.product);
  }, []);

  const pay = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_LAYDGER_API_BASE_URL}/payments`, {
      deliveryAddress: `${country} - ${postalCode} ${city}, ${street} ${houseNumber}`,
      productId: product._id
    });
    window.location.href = res.data;
  }

  return (
    <>
      <Layout>
        <main className="flex justify-evenly">
          {product && <div
            className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={pay}>
              <h5 className="text-xl font-medium text-gray-900">{product.name} - Delivery address</h5>
              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">
                  Country
                </label>
                <input type="text" name="country" id="country"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required={true} value={country} onChange={(e) => setCountry(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900">
                  Postal Code
                </label>
                <input type="text" name="postalCode"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required={true} value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
                  City
                </label>
                <input type="text" name="city"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required={true} value={city} onChange={(e) => setCity(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900">
                  Street
                </label>
                <input type="text" name="street"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required={true} value={street} onChange={(e) => setStreet(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">
                  House number
                </label>
                <input type="text" name="houseNumber"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       required={true} value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
              </div>
              <button type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Pay with DLay Pay
              </button>
            </form>
          </div>
          }
        </main>
      </Layout>
    </>
  );
}
