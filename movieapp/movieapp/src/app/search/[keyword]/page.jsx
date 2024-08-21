import Movies from '@/app/components/Movies';
import React from 'react'

const Page = async({params}) => {
    const keyword = params.keyword;
    console.log(keyword, "keyword")

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=49a426049cb099b2785283fc6ba58102&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json();

    console.log(data?.results,"data")

    // Filter out movies without poster_path
    const filteredResults = data?.results?.filter(movie => movie.poster_path) || [];

    return (
    <div>
        {
            filteredResults.length === 0 ? 
            <div>Aranılan Film Bulunamadı</div> :
            <div className='flex items-center flex-wrap gap-3'>
            {
                filteredResults.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            }
            </div>
        }
    </div>
  )
}

export default Page

