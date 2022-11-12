import {FormattedNumber, IntlProvider} from 'react-intl';

import {
  useNavigate,
} from "react-router-dom";

export default function Product({product}) {

  const navigate = useNavigate({state: product});
  const toCheckout = () => {
    navigate('/checkout', {state: {product: product}});
  }

  return (
    <div
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md my-4 mx-3">
      <img className="rounded-t-lg h-64 w-64 mx-auto" src={product.imageUrl} alt=""/>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h5>
        <p className="mb-3 font-normal text-gray-700">{product.description}</p>
        <button onClick={toCheckout}
                className="mx-auto flex lg:inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Buy for <IntlProvider locale='en'>
          <FormattedNumber value={product.amountInWei * 0.0042}
                           style="currency"
                           currency={'USD'}
                           minimumFractionDigits="2"
                           maximumFractionDigits="2"/>
        </IntlProvider>
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>)
}
