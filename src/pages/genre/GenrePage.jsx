import React, {useState} from 'react'
import actionBg from '../../assets/action.png'
import styles from './GenrePage.module.css'

function GenrePage() {
const [genres, setGenres] = useState([{
    title: "Action",
    bgImg: actionBg,
},
{
    title: "Drama",
    bgImg: "",
},
{
    title: "Romance",
    bgImg: "",
},
{
    title: "Thriller",
    bgImg: "",
},
{
    title: "Western",
    bgImg: "",
},
{
    title: "Horror",
    bgImg: "",
},
{
    title: "Fantasy",
    bgImg: "",
},
{
    title: "Music",
    bgImg: "",
},
{
    title: "Fiction",
    bgImg: "",
},
]);
const [selectedGenres, setSelectedGenres] = useState([1,3,5])

const removeGenre = (index)=>{
const newGenres = selectedGenres.filter((item)=>item!==index);
setSelectedGenres(newGenres)
}

  return (
    <div className={styles.page}>
    <div className={styles.left}>
     <h2>Super App</h2>
     <h1>Choose your Entertainment Category</h1>
     <div className={styles.selected}>
     {selectedGenres.map((item)=>(
        <div key = {item}className={styles.selectedGenre}>
            {genres[item].title}
            <img src= {genres[item].bgImg} alt="background Image" />
            <button onClick={()=> removeGenre(item)}>X</button>
        </div>
     ))}
     </div>
    </div>
    </div>
  )
}

export default GenrePage
