// import { useEffect, useState } from "react";
// import "./list.scss";
// import { useNavigate } from "react-router";
// // Define types
// interface Product {
//   id: number;
//   nameProduct: string;
//   price: number;
//   images?: string;
//   color?: string;
//   typeProduct?: string;
// }

// export const ListProduct = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [colorFilter, setColorFilter] = useState<string[]>(['Red', 'Blue', 'Black']);
//   const [page, setPage] = useState<number>(0);
//   const [sortBy, setSortBy] = useState<string>('highToLow');
//   const [price, setPrice] = useState<string>('');
//   const [color, setColor] = useState<string>('');
//   const [typeProduct, setTypeProduct] = useState<string>('');
//   const [nameProduct, setNameProduct] = useState<string>('');

//   const sampleProducts = [
//     { id: 1, nameProduct: "Product 1", price: 250, images: "https://via.placeholder.com/150", color: "Red", typeProduct: "Electronics" },
//     { id: 2, nameProduct: "Product 2", price: 450, images: "https://via.placeholder.com/150", color: "Blue", typeProduct: "Fashion" },
//     { id: 3, nameProduct: "Product 3", price: 1200, images: "https://via.placeholder.com/150", color: "Black", typeProduct: "Furniture" },
//     { id: 4, nameProduct: "Product 4", price: 950, images: "https://via.placeholder.com/150", color: "Red", typeProduct: "Electronics" },
//     { id: 5, nameProduct: "Product 5", price: 180, images: "https://via.placeholder.com/150", color: "Blue", typeProduct: "Accessories" },
//   ];

//   const getAllProducts = async () => {
//     try {
//       // Simulate fetching data (replace with service.getAll() when API is available)
//       setProducts(sampleProducts);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, [page, sortBy, price, color, typeProduct, nameProduct]);

//   return (
//     <div className="product-page">
//       <div className="toggle-header flex space-x-4 mb-4">
//         {/* Type Product Filter */}
//         <div className="relative">
//           <button className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none">
//             Type Product
//           </button>
//           <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-full">
//             <li>
//               <span className={`block px-4 py-2 ${typeProduct === '' ? 'bg-blue-100' : ''}`} onClick={() => setTypeProduct('')}>All</span>
//             </li>
//             {/* Example item */}
//             <li>
//               <span className={`block px-4 py-2 ${typeProduct === 'Electronics' ? 'bg-blue-100' : ''}`} onClick={() => setTypeProduct('Electronics')}>Electronics</span>
//             </li>
//           </ul>
//         </div>

//         {/* Color Filter */}
//         <div className="relative">
//           <button className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none">
//             Color
//           </button>
//           <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-full">
//             <li>
//               <span className={`block px-4 py-2 ${color === '' ? 'bg-blue-100' : ''}`} onClick={() => setColor('')}>All</span>
//             </li>
//             {colorFilter.map((c, idx) => (
//               <li key={idx}>
//                 <span className={`block px-4 py-2 ${color === c ? 'bg-blue-100' : ''}`} onClick={() => setColor(c)}>
//                   {c}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Price Filter */}
//         <div className="relative">
//           <button className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none">
//             Price
//           </button>
//           <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-full">
//             <li><span className="block px-4 py-2" onClick={() => setPrice('0-500')}>0$ - 500$</span></li>
//             <li><span className="block px-4 py-2" onClick={() => setPrice('500-1000')}>500$ - 1000$</span></li>
//             <li><span className="block px-4 py-2" onClick={() => setPrice('1001')}>1000$+</span></li>
//           </ul>
//         </div>
//       </div>

//       {/* Sort Filter */}
//       <div className="relative mb-4">
//         <button className="bg-gray-200 text-black py-2 px-4 rounded-md focus:outline-none">
//           Sort
//         </button>
//         <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-full">
//           <li>
//             <span className={`block px-4 py-2 ${sortBy === 'lowToHigh' ? 'bg-blue-100' : ''}`} onClick={() => setSortBy('lowToHigh')}>Low To High</span>
//           </li>
//           <li>
//             <span className={`block px-4 py-2 ${sortBy === 'highToLow' ? 'bg-blue-100' : ''}`} onClick={() => setSortBy('highToLow')}>High To Low</span>
//           </li>
//         </ul>
//       </div>

//       {/* Product List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.length === 0 ? (
//           <div className="text-danger text-center">No products found.</div>
//         ) : (
//           products.map((p) => (
//             <div key={p.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
//               <div className="card-img-top mb-4">
//                 <img src={p.images || '/default.jpg'} alt={p.nameProduct} className="w-full h-40 object-cover rounded-md" />
//               </div>
//               <div className="card-body">
//                 <p className="text-xl font-semibold">{p.nameProduct}</p>
//                 <p className="text-gray-700">${p.price}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="text-center mt-6">
//         <button
//           onClick={() => setPage((prev) => prev + 1)}
//           className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// };
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./list.scss";

// Define types
interface Product {
  id: number;
  nameProduct: string;
  price: number;
  images?: string;
  color?: string;
  typeProduct?: string;
}

export const ListProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>(['Red', 'Blue', 'Black']);
  const [typeProductOptions, setTypeProductOptions] = useState<string[]>(['Electronics', 'Fashion', 'Furniture', 'Accessories']);
  const [page, setPage] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('highToLow');
  const [price, setPrice] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [typeProduct, setTypeProduct] = useState<string>('');
  const [nameProduct, setNameProduct] = useState<string>('');
  const [showTypeDropdown, setShowTypeDropdown] = useState<boolean>(false);
  const [showColorDropdown, setShowColorDropdown] = useState<boolean>(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState<boolean>(false);
  const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);

  const sampleProducts = [
    { id: 1, nameProduct: "Product 1", price: 250, images: "https://via.placeholder.com/150", color: "Red", typeProduct: "Electronics" },
    { id: 2, nameProduct: "Product 2", price: 450, images: "https://via.placeholder.com/150", color: "Blue", typeProduct: "Fashion" },
    { id: 3, nameProduct: "Product 3", price: 1200, images: "https://via.placeholder.com/150", color: "Black", typeProduct: "Furniture" },
    { id: 4, nameProduct: "Product 4", price: 950, images: "https://via.placeholder.com/150", color: "Red", typeProduct: "Electronics" },
    { id: 5, nameProduct: "Product 5", price: 180, images: "https://via.placeholder.com/150", color: "Blue", typeProduct: "Accessories" },
  ];

  const getAllProducts = async () => {
    try {
      // Simulate fetching data (replace with service.getAll() when API is available)
      let filteredProducts = [...sampleProducts];
      
      // Apply filters
      if (typeProduct) {
        filteredProducts = filteredProducts.filter(p => p.typeProduct === typeProduct);
      }
      
      if (color) {
        filteredProducts = filteredProducts.filter(p => p.color === color);
      }
      
      if (price) {
        if (price === '0-500') {
          filteredProducts = filteredProducts.filter(p => p.price >= 0 && p.price <= 500);
        } else if (price === '500-1000') {
          filteredProducts = filteredProducts.filter(p => p.price > 500 && p.price <= 1000);
        } else if (price === '1000+') {
          filteredProducts = filteredProducts.filter(p => p.price > 1000);
        }
      }
      
      // Apply sorting
      if (sortBy === 'lowToHigh') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'highToLow') {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
      
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [page, sortBy, price, color, typeProduct, nameProduct]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowTypeDropdown(false);
      setShowColorDropdown(false);
      setShowPriceDropdown(false);
      setShowSortDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e: React.MouseEvent, dropdown: string) => {
    e.stopPropagation();
    
    // Close all dropdowns first
    setShowTypeDropdown(false);
    setShowColorDropdown(false);
    setShowPriceDropdown(false);
    setShowSortDropdown(false);
    
    // Then open the selected one
    if (dropdown === 'type') setShowTypeDropdown(prev => !prev);
    if (dropdown === 'color') setShowColorDropdown(prev => !prev);
    if (dropdown === 'price') setShowPriceDropdown(prev => !prev);
    if (dropdown === 'sort') setShowSortDropdown(prev => !prev);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-page max-w-7xl mx-auto p-4">
      {/* Search bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <button className="absolute right-3 top-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
      
      {/* Filter section */}
      <div className="filter-section flex flex-wrap gap-4 mb-8">
        {/* Sort Filter */}
        <div className="relative z-50" onClick={(e) => e.stopPropagation()}>
          <button 
            className="bg-white text-gray-800 border border-gray-300 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 flex items-center gap-2"
            onClick={(e) => handleDropdownClick(e, 'sort')}
          >
            <span>Sort</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          {showSortDropdown && (
            <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-40 border border-gray-200 z-10">
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortBy === 'lowToHigh' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setSortBy('lowToHigh')}
                >
                  Low To High
                </button>
              </li>
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortBy === 'highToLow' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setSortBy('highToLow')}
                >
                  High To Low
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Type Product Filter */}
        <div className="relative z-40" onClick={(e) => e.stopPropagation()}>
          <button 
            className="bg-white text-gray-800 border border-gray-300 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 flex items-center gap-2"
            onClick={(e) => handleDropdownClick(e, 'type')}
          >
            <span>{typeProduct || 'Type Product'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          {showTypeDropdown && (
            <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-40 border border-gray-200 z-10">
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${typeProduct === '' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setTypeProduct('')}
                >
                  All
                </button>
              </li>
              {typeProductOptions.map((type, idx) => (
                <li key={idx}>
                  <button 
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${typeProduct === type ? 'bg-blue-50 text-blue-600' : ''}`} 
                    onClick={() => setTypeProduct(type)}
                  >
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Color Filter */}
        <div className="relative z-30" onClick={(e) => e.stopPropagation()}>
          <button 
            className="bg-white text-gray-800 border border-gray-300 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 flex items-center gap-2"
            onClick={(e) => handleDropdownClick(e, 'color')}
          >
            <span>{color || 'Color'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          {showColorDropdown && (
            <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-40 border border-gray-200 z-10">
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${color === '' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setColor('')}
                >
                  All
                </button>
              </li>
              {colorFilter.map((c, idx) => (
                <li key={idx}>
                  <button 
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${color === c ? 'bg-blue-50 text-blue-600' : ''}`} 
                    onClick={() => setColor(c)}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="inline-block w-4 h-4 rounded-full"
                        style={{ backgroundColor: c.toLowerCase() }}
                      ></span>
                      {c}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price Filter */}
        <div className="relative z-20" onClick={(e) => e.stopPropagation()}>
          <button 
            className="bg-white text-gray-800 border border-gray-300 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 flex items-center gap-2"
            onClick={(e) => handleDropdownClick(e, 'price')}
          >
            <span>Price</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          {showPriceDropdown && (
            <ul className="absolute bg-white shadow-lg mt-2 rounded-md w-40 border border-gray-200 z-10">
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${price === '0-500' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setPrice('0-500')}
                >
                  $0 - $500
                </button>
              </li>
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${price === '500-1000' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setPrice('500-1000')}
                >
                  $500 - $1000
                </button>
              </li>
              <li>
                <button 
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${price === '1000+' ? 'bg-blue-50 text-blue-600' : ''}`} 
                  onClick={() => setPrice('1000+')}
                >
                  $1000+
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Active filters */}
      <div className="active-filters flex flex-wrap gap-2 mb-6">
        {typeProduct && (
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            Type: {typeProduct}
            <button 
              className="ml-2 text-blue-600 hover:text-blue-800"
              onClick={() => setTypeProduct('')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </span>
        )}
        {color && (
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            Color: {color}
            <button 
              className="ml-2 text-blue-600 hover:text-blue-800"
              onClick={() => setColor('')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </span>
        )}
        {price && (
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            Price: {price === '0-500' ? '$0-$500' : price === '500-1000' ? '$500-$1000' : '$1000+'}
            <button 
              className="ml-2 text-blue-600 hover:text-blue-800"
              onClick={() => setPrice('')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </span>
        )}
      </div>

      {/* Product Grid */}
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or search term</p>
          </div>
        ) : (
          products.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image relative pt-[75%]">
                <img 
                  src={product.images || "/api/placeholder/300/225"} 
                  alt={product.nameProduct}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {product.color && (
                  <span 
                    className="absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: product.color.toLowerCase() }}
                    title={product.color}
                  ></span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{product.nameProduct}</h3>
                  <span className="font-semibold text-blue-600">${product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  {product.typeProduct && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {product.typeProduct}
                    </span>
                  )}
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {products.length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};