export const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string): void => {
  window.gtag("config", gaId, {
    page_path: url,
  });
};
