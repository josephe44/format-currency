# format-currency

## Overview

The `format-currency` package provides a utility function to format a numeric value into a localized currency format. It utilizes the `Intl.NumberFormat` API to handle the formatting of prices based on the provided currency or the default locale. Additionally, it includes a mapping of currency codes to their respective locales, enabling proper currency representation.

## Installation

To use the `format-currency` package, you can install it via npm or yarn:

```bash
npm install format-currency
```

or

```bash
yarn add format-price
```

## Usage

Once you have installed the package, you can import and use the formatCurrency function in your project as follows:

```javascript
import formatCurrency from "format-currency";

// Usage example
const amount = 1234.56;
const currency = "USD";

const formattedPrice = formatPrice(amount, currency);
console.log(formattedPrice); // Output: "$1,234.56"
```

The `formatCurrency` function takes two parameters:

- `amount` (required): The numeric value that you want to format as a price. If not provided or set to undefined, it defaults to 0.

- `currency` (optional): The currency code (e.g., "USD", "EUR", "GBP") for which you want to format the price. If not provided, the function will default to using the locale associated with the currency code "USD".

## Supported Currencies

The package supports the following currencies and their respective locales:

```javascript
const currencyLocales = {
  NGN: "en-NG",
  USD: "en-US",
  EUR: "en-GB",
  BRL: "pt-BR",
  CAD: "en-CA",
  CNY: "zh-CN",
  CZK: "cs-CZ",
  DKK: "da-DK",
  GBP: "en-UK",
  HKD: "zh-HK",
  HUF: "hu-HU",
  INR: "en-IN",
  JPY: "ja-JP",
  KRW: "ko-KR",
  MXN: "es-MX",
  NZD: "en-NZ",
  PLN: "pl-PL",
  RUB: "ru-RU",
  SEK: "sv-SE",
  SGD: "en-SG",
};
```

## Examples

```javascript
import formatCurrency from "format-currency";

console.log(formatCurrency(999.99, "EUR")); // Output: "€999.99"
console.log(formatCurrency(5000, "GBP")); // Output: "£5,000.00"
console.log(formatCurrency(999.99, "JPY")); // Output: "¥999.99"
console.log(formatCurrency(123456.789, "BRL")); // Output: "R$123,456.79"
console.log(formatCurrency(1000)); // Output: "$1,000.00" (uses default currency "USD")
console.log(formatCurrency()); // Output: "$0.00" (uses default currency "USD" and default amount 0)
```

## Notes

- Ensure that the currencyLocales mapping includes the currency codes and locales that you intend to use. You can add or modify entries as needed.

- If the provided currency code is not found in the currencyLocales mapping, the function will default to using the locale associated with the currency code "USD".

- If you need to format currencies that are not listed in the currencyLocales mapping, consider adding the relevant entries to support those currencies. Remember to use the appropriate locale for each currency to ensure accurate formatting.

- Make sure to handle currency conversions and other currency-related operations separately, as this package focuses solely on formatting prices in different locales.

We hope this package simplifies the process of formatting localized prices for your application. If you encounter any issues or have suggestions for improvement, please feel free to contribute to the package repository. Happy coding! 🚀
