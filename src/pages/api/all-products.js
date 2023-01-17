export default async function handler(req, res) {
  res.status(200).json({
    products: [
      {
        sku: 'hat',
        image: 'https://user-images.githubusercontent.com/1045274/203459985-64db29e7-bf63-4747-9c38-cc0b6a5cbaeb.jpg',
        title: 'Cosmo Hat',
        price: '20.00'
      },
      {
        sku: 'shirt',
        image: 'https://user-images.githubusercontent.com/1045274/203459990-2562790f-1c84-47ea-9c9d-df9baaae94e3.jpg',
        title: 'Cosmo Shirt',
        price: '25.00'
      },
      {
        sku: 'sweatshirt',
        image: 'https://user-images.githubusercontent.com/1045274/203459987-66b326c1-ce7b-411f-9980-ff9b73d102dd.jpg',
        title: 'Cosmo Sweatshirt',
        price: '35.00'
      },
      {
        sku: 'kidsshirt',
        image: 'https://user-images.githubusercontent.com/1045274/203459988-400dfb10-8f78-4e66-a416-db20a960d2cb.jpg',
        title: 'Cosmo Kids Shirt',
        price: '15.00'
      },
    ]
  });
}