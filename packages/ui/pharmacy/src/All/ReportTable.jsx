import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const ReportTable = () =>{

    const { watchList, removeStock} = useGlobalContext()
    const [stock, setStock] = useState([])
    const navigate = useNavigate()

    const renderIcon = ( change ) => {
        return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />
    }

    useEffect(()=>{
        // let isMounted = true
        const fetchData = async () => {
            try{
                const responses = await Promise.all( watchList.map( (stock ) => {
                    return(
                     finnhub.get("/quote" , {
                        params: {
                            symbol: stock
                        }
                       }
                       )
                    )
                }))
            //    console.log(responses)
               const data = responses.map((response) => {
                return (
                {
                    data: response.data,
                    symbol: response.config.params.symbol
                }
                )
            })
               console.log("ayvvu")
               console.log(data)
               setStock(data)
            //    if(isMounted){
            //       setStock(data)
            //    }
            //    else{
            //     console.log("S")
            //    }
            }
            catch(err){
                console.log("hello out")
            }
        }

        fetchData()
        // return ()=> {isMounted=false}
    },[watchList])

    const handleStockSelect = (symbol) => {
        navigate(`detail/${symbol}`)
    }

    return(
        <div>
            <table className="table hover mt-5">
                <thead style={{color: "rgb(79,89,102)"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last</th>
                        <th scope="col">Chg</th>
                        <th scope="col">Chg%</th>
                        <th scope="col">High</th>
                        <th scope="col">Low</th>
                        <th scope="col">Open</th>
                        <th scope="col">Pclose</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stockData) => {
                        console.log(stockData.symbol)
                        return(
                       <tr style={{cursor: "pointer"}} onClick={()=> handleStockSelect(stockData.symbol)} key={stockData.symbol} className="table-row">
                         <th scope="row">{stockData.symbol}</th>
                         <td>{stockData.data.c}</td>
                         <td className={stockData.data.d > 0 ? "text-success": "text-danger"}>{stockData.data.d}{stockData.data.d > 0 ? < BsFillCaretUpFill /> : < BsFillCaretDownFill />}</td>
                         <td className={stockData.data.dp > 0 ? "text-success": "text-danger"}>{stockData.data.dp}{renderIcon(stockData.data.dp)}</td>
                         <td>{stockData.data.h}</td>
                         <td>{stockData.data.l}</td>
                         <td>{stockData.data.o}</td>
                         <td>{stockData.data.pc}
                         <button className="btn btn-danger btn-sm ml-3 d-inline-block delete-button" onClick={(e)=>{e.stopPropagation() ; removeStock(stockData.symbol)}}>remove</button></td>
                       </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ReportTable
