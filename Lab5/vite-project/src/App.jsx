import './App.css'
import Card from './Card'

function App() {

  const alertMax = () => {
    alert("Cannot Vote")
  }
  
  const alertMin = () => {
    alert("Cannot Unvote")
  }

  return (
    <div className='bg-slate-400 h-screen flex flex-col items-center p-2 pt-6'>
      <div className='text-yellow-200 text-2xl font-bold'>
        โหวตอาหาร
      </div>
      <Card alertMax={alertMax} alertMin={alertMin} imgLink="https://goodlifeupdate.com/app/uploads/2021/04/ข้าวผัดมันกุ้งเสวบ.jpg" foodType="อาหารคาว" foodName="ข้าวผัดมันกุ้งหมูกรอบ" detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ab sunt est quidem quibusdam atque tempore, ipsum expedita ipsa dolorem neque perferendis esse eligendi illo rerum qui accusamus eos, totam vel, soluta earum labore consequatur."/>
      <Card alertMax={alertMax} alertMin={alertMin} imgLink="https://images.deliveryhero.io/image/fd-th/LH/z8qg-hero.jpg" foodType="อาหารหวาน" foodName="ไอศครีม" detail="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident officiis, architecto suscipit dignissimos harum blanditiis esse illo nulla, quia dolore ipsa? Minima at minus nobis voluptatem dolorem sequi nemo, rem accusantium possimus, amet obcaecati sint."/>
      
    </div>
  )
}

export default App
