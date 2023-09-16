
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import Swal from 'sweetalert2'

function App() {
  
  const [cardData,setCardData] = useState([]);
  const [credit,setCredit] =useState([]);
 const [remain,setRemain] = useState([])
  
  const handleCardData = (data) =>{
    const isExist = cardData.find(element => element.id === data.id)

    let credit = data.credit;
    if(isExist){
      return Swal.fire({
        icon: 'error',
        text: 'Already in Bookmark',
        
      })
    }
    else{
      cardData.forEach(element => {
        credit += element.credit;
        
      });
      

      const totalRemaining = 20-credit;
      
      
      
      if(credit>20){
        return Swal.fire({
          icon: 'error',
          text: 'You dont have enough Credit',
        })
      }
      else{
        setCredit(credit);
      setRemain(totalRemaining);
      const newCardData = [...cardData,data];
    setCardData(newCardData);

      }
      

    }


    
    
  }
  

  return (
    <div className=' container mx-auto'>
      
      <Header></Header>
      <div className=' flex gap-4'>
      <Cards handleCardData={handleCardData}></Cards>
      <Bookmarks cardData={cardData} credit={credit} remain={remain}></Bookmarks>

      </div>
      
      
    </div>
  )
}

export default App
