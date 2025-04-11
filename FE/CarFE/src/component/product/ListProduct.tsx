import { useEffect, useState } from "react"
import "../css/list.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router";

// import {getAll} from "../service/ProductService";
// import { Link } from "react-router-dom";
// import { FormattedNumber } from "react-intl";
import { Field, Formik, Form } from "formik";

import {
  Accordion,
  AccordionItem,

} from '@chakra-ui/react'

import * as service from "../../service/apiService"
import { Box } from "@mui/system";


export const ListProduct = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productTypes, setTypeProducts] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [page, setPage] = useState(0);

  const [sortBy, setSortBy] = useState('highToLow');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [typeProduct, setTypeProduct] = useState('');
  const [nameProduct, setNameProduct] = useState('');

  const getAllProducts = async () => {
    // const res = await service.getAll(page, sortBy, price, color, typeProduct, nameProduct);

  }





  useEffect(() => {
    const getAllProduct = async () => {
      // const res = await service.getAll(page, sortBy, price, color, typeProduct, nameProduct);
      // if (res) {
      //   setProducts(res.content)
      // }

    }
    getAllProduct();
  }, [sortBy, price, color, typeProduct, nameProduct])


  useEffect(() => {
    getAllProducts();

  }, [page])

  if (!products) {
    return null;
  }
  if (!productTypes) {
    return null;
  }

  // const paginate = (page) => {
  //   setPage(page)
  // }

  console.log(colorFilter)

  return (
    <>

      <div className={'toggle-header'}>


        <div className={'menu'}>

          <div className="dropdown">
            <button
              style={{ border: "none" }} className=" dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Type Product
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <li><span className={`dropdown-item ${typeProduct === '' ? 'active' : ''}`} onClick={() => setTypeProduct('')} >All</span></li>

            </ul>
          </div>


          <div className="dropdown">
            <button
              style={{ border: "none" }} className=" dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Color
            </button>
            <ul className="dropdown-menu dropdown-menu-light">

              <li><span className={`dropdown-item ${color === '' ? 'active' : ''}`} onClick={() => setColor('')} >All</span></li>
              {
                colorFilter && colorFilter.map((pr, index) => (

                  <li key={index}>

                  </li>
                ))
              }


            </ul>
          </div>


          <div className="dropdown">
            <button
              style={{ border: "none" }}
              className=" dropdown-toggle"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <li>
                <span onClick={() => setPrice('0-500')} className="dropdown-item active">
                  0$ - 500$
                </span>
              </li>
              <li>

              </li>
              <li>
                <a onClick={() => setPrice('500-1000')} className="dropdown-item">
                  500$-1000$
                </a>
              </li>
              <li>

              </li>
              <li>
                <a onClick={() => setPrice('1001')} className="dropdown-item">
                  1000$
                </a>
              </li>


            </ul>
          </div>
        </div>


        <div className="dropdown">
          <button
            style={{ border: "none" }}
            className=" dropdown-toggle"
            type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </button>
          <ul className="dropdown-menu dropdown-menu-light">
            <li>
              <span onClick={() => setSortBy('lowToHigh')} className="dropdown-item active">
                Low To High
              </span>
            </li>
            <li>

            </li>
            <li>
              <span onClick={() => setSortBy('highToLow')} className="dropdown-item">
                High To Low
              </span>
            </li>

          </ul>
        </div>
      </div>


      {/* <Accordion allowToggle>
        <AccordionItem value="item-1">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Section 1 content
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-2">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Section 2 content
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}



      <div className="carousel-containers">


        {/* {products?.length === 0 && nameProduct !== "" ? (
          <div>
            <h4 className={"text-danger"}>
              No products found
            </h4>
          </div>
        ) :
          (
            products && products.map((p, index) => (

              // <div key={p.id} className="card">

              //   <div className="card-img-top">
              //     <Link to={`/detail/${p.id}/`}>
              //       <img src={p.images} />

              //     </Link>
              //   </div>
              //   <div className="card-body">
              //     <p className="card-text">
              //       {p.nameProduct}
              //     </p>
              //     <p>$
              //       <FormattedNumber
              //         value={p?.price}
              //         currency="USD"
              //         minimumFractionDigits={0}>
              //       </FormattedNumber>

              //     </p>
              //   </div>
              // </div>
            ))
          )} */}
      </div>


      <div style={{ textAlign: "center" }}>

        <button onClick={() => setPage(prevState => prevState + 1)}
          style={{
            backgroundColor: "whiteSmoke",
            fontSize: "20px",
            border: "1px solid",
            width: "95%",
            margin: "20px 0px"
          }}>Load more
        </button>
      </div>


    </>

  )
}