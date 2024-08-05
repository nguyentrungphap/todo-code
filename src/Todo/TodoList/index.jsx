import  { useState } from 'react'

const DATA =[
    {id:1,
      body:"sản phẩm 1",
      status:"True"
    },  {id:2,
      body:"sản phẩm 2",
      status:"False"
    },  {id:3,
      body:"sản phẩm 3",
      status:"True"
    },  {id:4,
      body:"sản phẩm 4",
      status:"False"
    },  {id:5,
      body:"sản phẩm 5",
      status:"True"
    }
  ]
  
  const BUTTON_CONTROLER =["All","True","False"]

function TodoList() {
    const [status, setStatus]= useState("True")
    const filterData = status=== "All" ? DATA :  DATA.filter((data) => data.status === status)
    console.log(filterData)
    const renderbuttonList = ()=>{
      return(  
        BUTTON_CONTROLER.map((button)=>(
          <button key={button} onClick={() => setStatus(button)}>{button}</button>
        )))
    }
    const renderDataList = ()=>{
      return(
        filterData.map((data)=>{
          return(
            <ul key={data.id}>
              <li>{data.body}</li>
              <li>{data.status}</li>
            </ul>
          )
        })
      )
    }
  return (
    <>
    {renderbuttonList()}
    <div>
      <h1>List Data</h1>
    {renderDataList()}
    </div>
</>
  )
}

export default TodoList