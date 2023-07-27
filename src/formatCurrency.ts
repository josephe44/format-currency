import { currencyLocales } from "@/currencyLocales";

const formatPrice = (amount: number, currency?: string): string => {
  amount ??= 0;
  const locale = currency ? currencyLocales[currency] : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency || "USD",
  }).format(amount);
};

export default formatPrice;
