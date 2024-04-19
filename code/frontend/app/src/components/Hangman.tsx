
import img0 from '../assets/00.jpg'
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'
import img4 from '../assets/04.jpg'
import img5 from '../assets/05.jpg'
import img6 from '../assets/06.jpg'

type Props={
    wrongAttempt: 0 | 1 | 2 | 3 | 4 | 5 | 6 ;
}

const imgMapper={
    0:img0,
    1:img1,
    2:img2,
    3:img3,
    4:img4,
    5:img5,
    6:img6,
} as const;

export default function HangMan({wrongAttempt=0}:Props){
    return(
        <div style={{height:100,display:'flex',justifyContent:'center',width:'100%'}}>
            <img height={'100%'} src={imgMapper[wrongAttempt]} />
        </div>
    )
}