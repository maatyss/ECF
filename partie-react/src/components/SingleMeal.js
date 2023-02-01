import slugify from 'slugify'

const SingleMeal = ({meal, click})=>{
  
  let cardId = slugify(meal.title)
  let buttonId = slugify(meal.title) + '_Button'
  
  
  return (
          <article id={cardId} className={'card'}>
            <img className={'foodpic'} src={meal.imageSrc} alt={meal.title}/>
            <div>
              <h3 className={'title'}>{meal.title}</h3>
              <p className={'content'}>{meal.content}</p>
              <h4 className={'price'}>{meal.price}</h4>
            </div>
            <p className={'rating'}>⭐{meal.rating}<span className={'reviews'}>({meal.reviews})</span></p>
            <p id={buttonId} className={'orderButton hidden'} onClick={()=> click(meal)}>Commander</p>
            <div className={'greyfilter'}></div>
          </article>
  )
}

export {SingleMeal}