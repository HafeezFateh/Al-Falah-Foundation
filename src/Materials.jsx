import Layout from "./layouts/Layout";

function Materials(){
    return(
       <Layout>

        <div className="flex flex-col items-center lg:items-start mt-10 gap-2 lg:flex-row lg:justify-center lg:gap-20">

            <div className="flex flex-col mt-2">
                <h1 className="text-blue-600 text-xl ">Holy Book</h1>
                <a href="" className="text-stone-400 text-xl block mt-2">Al Qur'an</a>
            </div>

            <div className="flex  flex-col items-center gap-2">
                <h1 className="text-blue-600 text-xl mt-2">Top Hadith Books</h1>
                <a href="" className="text-stone-400 text-lg">Sahih al Bukhari</a>
                <a href="" className="text-stone-400 text-lg">Sahih al Muslim</a>
                <a href="" className="text-stone-400 text-lg">Sunan an Nasa'i</a>
                <a href="" className="text-stone-400 text-lg">Sunan Abi Dawood</a>
                <a href="" className="text-stone-400 text-lg">Jamiat Tirmidhi</a>
                <a href="" className="text-stone-400 text-lg">Sunan ibn Majah</a>
                <a href="" className="text-stone-400 text-lg">Musnad Ahmed</a>
                <a href="" className="text-stone-400 text-lg">Mishkat al Masabih</a>
                <a href="" className="text-stone-400 text-lg">Riyad us Saliheen</a>
            </div>

            <div className="flex flex-col items-center gap-2">
                <h1 className="text-blue-600 text-xl mt-2">Recommendations</h1>
                <a href="" className="text-stone-400 text-lg">The Sealed Nectar</a>
                <a href="" className="text-stone-400 text-lg">Ihya Ulum al-Din</a>
            
            </div>
           

            
        </div>

       </Layout>
    )
}

export default Materials;