// import React, { useId } from 'react';

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     CurrencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {
//     const amountInputId = useId();
//     const selectInputId = useId();

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className='w-1/2'>
//                 <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full border-transparent py-1.5"
//                     type="number"
//                     placeholder='Amount'
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange?.(e.target.value)}
//                 />
//             </div>
//             <div className='w-1/2 flex flex-wrap justify-end text-right'>
//                 <label htmlFor={selectInputId} className='text-black/40 mb-2 w-full'>
//                     Currency type
//                 </label>
//                 <select
//                     id={selectInputId}
//                     className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//                     value={selectCurrency}
//                     onChange={(e) => onCurrencyChange?.(e.target.value)}
//                     disabled={currencyDisable}
//                 >
//                     {CurrencyOptions.map((currency) => (
//                         <option key={currency} value={currency}>
//                             {currency.toUpperCase()}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;
import React, { useId } from "react";

function InputBox({
    label = "Amount",
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = ["usd", "eur", "gbp"],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();
    const selectInputId = useId();

    // Handle numeric input validation
    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            onAmountChange?.(value);
        }
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount Input Section */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full border-transparent py-1.5"
                    type="number"
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={handleAmountChange}
                    min="0"
                    aria-label="Amount Input"
                    autoComplete="off"
                />
            </div>

            {/* Currency Selection Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label htmlFor={selectInputId} className="text-black/40 mb-2 w-full">
                    Currency Type
                </label>
                <select
                    id={selectInputId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange?.(e.target.value)}
                    disabled={currencyDisable}
                    aria-label="Currency Selection"
                >
                    {CurrencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
