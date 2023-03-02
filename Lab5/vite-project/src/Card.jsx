import { useEffect, useState } from "react";

const Card = (props) => {
    const { imgLink, foodType, foodName, detail, alertMax, alertMin } = props
    
    const [vote, setChangeVote] = useState(0);

    const increase = () => {
        if(vote < 10){
            setChangeVote(vote => vote + 1);
        }
        else{
            alertMax()
        }
        
      };

      const decrease = () => {
        if(vote > 0){
            setChangeVote(vote => vote - 1);
        }
        else{
            alertMin()
        }
      };
    return(
        <div className="w-[800px] h-72 bg-amber-100 rounded-2xl border-black border flex flex-col mt-5">
            <div className="flex flex-row">
            <img src={imgLink} className='w-60 h-54 p-3'></img>
            <div className="p-3 flex flex-col">
                <div>
                    {foodType}
                </div>
                <div className="pt-4">
                    {foodName}
                </div>
                <div className="pt-4">
                    {detail}
                </div>
                </div>
            </div>
            

                <div className="flex flex-row justify-center pt-2">
                    <button className="border border-black p-2 rounded" onClick={increase}>
                        Click to vote
                    </button>
                    <div className="px-6 pt-2">
                        {vote === 0 ? "MIN" : vote === 10 ? "MAX" : vote}
                    </div>
                    <button className="border border-black p-2 rounded" onClick={decrease}>
                        Click to unvote
                    </button>
                </div>
            
        </div>
    )
    
}

export default Card