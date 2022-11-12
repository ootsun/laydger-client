import axios from "axios";
import {useEffect} from "react";
import Layout from "../components/layout.jsx";
import {useLoaderData, useNavigate} from "react-router-dom";

export async function loader({params}) {
  const res = await axios.get(`${process.env.REACT_APP_LAYDGER_API_BASE_URL}/payments/${params.paymentId}`);
  return res.data;
}

export default function Success() {

  const navigate = useNavigate();
  const payment = useLoaderData();

  useEffect(() => {
    if (!payment) {
      navigate('/');
    }
  }, []);

  console.log(payment)

  return (
    <>
      <Layout>
        <main className="flex justify-evenly">
          {payment &&
          <div id="alert-additional-content-3"
               className="my-4 mx-3 p-4 mb-4 border border-green-300 rounded-lg bg-green-50 max-w-sm" role="alert">
            <div className="flex items-center">
              <svg aria-hidden="true" className="w-5 h-5 mr-2 text-green-700" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium text-green-700">Congrats!</h3>
            </div>
            <div className="mt-2 mb-4 text-sm text-green-700">
              Your product will be delivered at {payment.deliveryAddress} very soon.
            </div>
            <img className="rounded-t-lg h-64 w-64 mx-auto" src={payment.product.imageUrl} alt=""/>
            <div className="p-5">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{payment.product.name}</h5>
              <p className="mb-3 font-normal text-gray-700">{payment.product.description}</p>
            </div>
            <div className="flex">
              <button type="button"
                      onClick={() => navigate('/')}
                      className="mx-auto flex lg:inline-flex text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center items-center">
                <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"></path>
                </svg>
                See all our other products
              </button>
            </div>
          </div>
          }
        </main>
      </Layout>
    </>
  );
}
