import React from 'react'
import DashboardTable from 'common/components/molecules/DashboardTable'
import Button from "common/components/atoms/Button/Button"
import "./List.scss";
import useAuth from 'common/hooks/useAuth';

function List() {
  const [data,setData]=React.useState([]);
  const {handleNavigation,logout,fetchData} =useAuth();
  async function handleData(){
    const personData=await fetchData();
    setData(personData?.data.data);
  }
  React.useEffect(()=>{
      handleData();
  },[])
  
  
  return (
    <>
    <DashboardTable data={data}></DashboardTable>
    <div className='button-div'>
       <Button variant="filled" onClick={logout}>Logout</Button>
       <Button variant="subtle" color="yellow" onClick={()=>{handleNavigation("/reset-password")}} >Reset Password</Button>
    </div>
    </>
  )
}

export default List