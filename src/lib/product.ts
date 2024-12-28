export interface IProduct {
  img: string;
  head: string;
  body: string;
}

export const products: IProduct[] = [
  {
    img: "/product_img1.png",
    head: "Auto Body Components",
    body: "Auto body components affect collision safety, fuel economy, and styling of any vehicle. To deliver high-value-added products that check every box using our integrated production system spanning component design to mass production, our involvement begins at new model development.",
  },
  {
    img: "/product_img2.png",
    head: "Transmission Parts",
    body: "Transmission parts determine the driveability, fuel economy, and environmental performance of vehicles. Our precision press processing techniques produce tolerances of 1/100 mm, resulting in low-cost, high-quality products.",
  },
  {
    img: "/product_img3.png",
    head: "Die and Production System",
    body: "Die is designed and fabricated in-house using our proprietary knowhow developed over many years at our production plants in and outside Japan. We precisely fashion die with complex curved surfaces to support the production of superior quality products.",
  },
];
